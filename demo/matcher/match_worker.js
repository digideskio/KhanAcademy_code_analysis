importScripts("../lib/acorn.js");
importScripts("../lib/acorn_loose.js");
importScripts("./matcher.js");

var test = function(){
    for(var i=0; i<tests.length; i++){
        results.push(match(tests[i], code))
    }
}

addEventListener("message", function(e){
    var data = JSON.parse(e.data)
    var tests = data.tests;
    var code = data.code;
    var results = []
    for(var i=0; i<tests.length; i++){
        results.push(match(tests[i], code))
    }
    postMessage(JSON.stringify(results))
})

postMessage("ready")