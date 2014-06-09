(function(){
	var threadPool = function(callback){
		this.pool = [];
		this.cid = 0;
		this.callback = callback;
	}
	threadPool.prototype.getThread = function(){
		var th = this.pool.shift()
		if(!th){
			th = new Worker("matcher/match_worker.js");
			th.onmessage = this.callback
		}
		this.cid++;
		th.id = this.cid;
		return th;
	}
	threadPool.prototype.returnThread = function(th){
		this.pool.push(th);
	}

	var customTests = [
	{tests: ["var Bx, By;"], message: "Your pong game should have variables Bx and By to track the ball's location"},
	{tests: ["var draw = function(){}"], message: "Your pong game should have a draw function"},
	{tests: ["var draw = function(){ Bx += _; }"], message: "You should increment Bx in your draw function"},
	]
	
	var matchers = new threadPool(function(e){
		console.log(e);
		results = JSON.parse(e.data);
		if(matchers.cid == this.id){
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
		matchers.returnThread(e.target)
	})

	window.customHinter = function(){
		var code = ScratchpadUI.editor.text();
		var thread = matchers.getThread();
		console.log(code);
		thread.postMessage(JSON.stringify({code: code, tests: customTests.map( function(test_obj){ return test_obj.tests } )}))
	}
})()