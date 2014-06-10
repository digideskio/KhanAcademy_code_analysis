(function(){
	var threadPool = function(){
		this.pool = [];
		this.cid = 0;
	}
	threadPool.prototype.getThread = function(){
		var th = this.pool.shift()
		if(!th){
			th = new Worker("matcher/match_worker.js");
		}
		this.cid++;
		th.id = this.cid;
		return th;
	}
	threadPool.prototype.returnThread = function(th){
		this.pool.push(th);
	}

	var customTests = [
    {tests: ["!while()"], message: "Bad boy! No while loops."},
	/*{
        tests: [
            {test: "var $x, $y;", 
             validate_callback: function(wildcards){ return (wildcards.$x.name.slice(-1) == 'x' && wildcards.$y.name.slice(-1) == "y")}}
        ],
        message: "Your pong game should have variables Bx and By to track the ball's location"
    },*/
	{tests: ["var draw = function(){}"], message: "Your pong game should have a draw function"},
	{tests: ["var draw = function(){ Bx += _; }"], message: "You should increment Bx in your draw function"},
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
        var post_tests = function(){ thread.postMessage(JSON.stringify({code: code, tests: customTests.map( function(test_obj){ return test_obj.tests } )})) }
		var code = ScratchpadUI.editor.text();
		var thread = matchers.getThread();
        
        if(thread.ready) post_tests()
        else{
            thread.onmessage = function(e){
                if(e.data == "ready"){
                    thread.ready = true;
                    post_tests();
                } else {
                    if(matchers.cid == this.id){
                        results = JSON.parse(e.data);
                        display_results(results);
                    }                           
		            matchers.returnThread(this)
                }
            }
        }
		
	}
})()