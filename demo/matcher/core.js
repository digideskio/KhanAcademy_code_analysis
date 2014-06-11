(function(){
	var threadPool = function(){
		this.pool = [];
        this.current = false;
	}
	threadPool.prototype.getThread = function(){
		var th = this.pool.shift()
		if(!th){
			th = new Worker("matcher/match_worker.js");
		}
        if(this.current) this.current.postMessage("abort");
        this.current = th;
		return th;
	}
	threadPool.prototype.returnThread = function(th){
        if(th == this.current) this.current = false;
		this.pool.push(th);
	}

	var customTests = [
    {
        tests: [{filter: "var _ = [$$_]; !;var _ = [_, _, _, $$_]; "}],
        isError: true, 
        message: "You must have three items in your array"
    }, {
        tests: [{filter: "var _ = [$a, $b, $c];", 
                 funcs: [function($a, $b, $c){
                        var isString = function(s){ console.log(s); return s && s.length >= 2 && (s[0] == '"' || s[0] == "'") && s[0] == s.slice(-1) }
                        return !isString($a.raw) || !isString($b.raw) || !isString($c.raw)
                        return 1;
                    }.toString()]
                }],
        isError: true, 
        message: "Your favourite animals must be strings"
    }, {
        tests: [{filter: "var _ = [_, _, _, $$_];"}], 
        message: "Create a variable, and set it to an array with your three of favourite animals"
    },	{
        tests: [{filter: "var $c = 0; !;$c = [$$_]" }],
        message: "Declare another variable to use as a counter and set it to 0"
    },	{
        tests: [{filter: "var $a = [$$_]; var $c = 0; while(){ } !while($c < $a.length)"}], 
        isError: true,
        message: "You can use YourArray.length to get the length of your array"
    },	{
        tests: [{filter: "var $a = [$$_]; var $c = 0; while(){ } !while(){ $c++ }"}], 
        isError: true,
        message: "You need to increment the counter in the loop or it will run forever"
    },	{
        tests: [{filter: "var $a = [$$_]; var $c = 0; while($c < $a.length){ $c++ }"}], 
        message: "Use the counter to loop through all the animals with a while loop"
    },	{
        tests: [{filter: "var $a = [$$_]; var $c = 0; while($c < $a.length){ fill($$_) text($a[$c], _, _, $$_)}"}], 
        message: "In the while loop set the fill() color and use the 'text()' function to output text."
    },	{
        tests: [{filter: "while(){ if() }"}], 
        isError: true,
        message: "You shouldn't need if statements for this demo"
    },	{
        tests: [{
            filter: "var $a = [$$_]; var $c = 0; while($c < $a.length){ fill($$_) text($a[$c], _, _+($counter*$space), $$_)}",
            funcs: [function($space){ return parseFloat($space.raw) > 10; }.toString()]
        }], 
        message: "Make sure to space the words out enough vertically"
    },	{
        tests: [{filter: "var _ = [_, _, _, _, _]"}],
        message: "Extend the array 5 animals, to see that everything still works."
    }
	]
	
	var matchers = new threadPool()
    var customHinterOn = false;

    function display_results(results){
			var hint = "";
			for(var i in customTests){
				if((!customTests[i].isError && !results[i]) || (customTests[i].isError && results[i])){
					hint = customTests[i].message;
					break;
				}
			}
			if(!hint) hint = "You Win!";
			$('#custom-hinter p').text(hint);
	}
        
	window.customHinter = function(){
        //if(!customHinterOn) return "fail";
        var post_tests = function(thread){ thread.postMessage(JSON.stringify({code: code, tests: customTests.map( function(test_obj){ return test_obj.tests } )})) }
		var code = ScratchpadUI.editor.text();
		var thread = matchers.getThread();
        
        if(thread.ready) post_tests(thread)
        else{
            thread.onmessage = function(e){
                console.log(e.data)
                if(e.data == "ready"){
                    thread.ready = true;
                    post_tests(this);
                } else {
                    if(e.data != "aborted"){
                        results = JSON.parse(e.data);
                        display_results(results);
                    }                           
		            matchers.returnThread(this)
                }
            }
        }
		
	}
})()