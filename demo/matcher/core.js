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
    {tests: [{filter: "!while()"}], message: "Bad boy! No while loops."},
	{
        tests: [
            {filter: "var $x, $y;", 
             funcs: [ function($x, $y){ return ($x.name.slice(-1) == 'x' && $y.name.slice(-1) == "y")}.toString() ] }
        ],
        message: "Your pong game should have variables for x and y to track the ball's location"
    },
	{tests: [{filter: "var draw = function(){}"}], message: "Your pong game should have a draw function"},
	{tests: [{filter: "var draw = function(){ Bx += _; }"}], message: "You should increment Bx in your draw function"},
	]
	
	var matchers = new threadPool()

    function display_results(results){
			var hint = "";
			for(var i in customTests){
				if(!results[i]){
					hint = customTests[i].message;
					break;
				}
			}
			if(!hint) hint = "You Win!";
			$('#custom-hinter p').text(hint);
	}
        
	window.customHinter = function(){
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