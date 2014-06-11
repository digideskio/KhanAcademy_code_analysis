importScripts("../javascript/shared-package/es5-shim.js");
importScripts("../lib/acorn.js");
importScripts("../lib/acorn_loose.js");
importScripts("./matcher.js");

var abort = false;

var test = function(){
    for(var i=0; i<tests.length; i++){
        results.push(match(tests[i], code))
    }
}

function validateWith(funcs){
    var validateCallback = function(wildcards){
        if(funcs){
            for(var i=0; i<funcs.length; i++){
                var func_code = funcs[i];
                eval("var func = "+func_code);
                var param_reqs = func_code.split(')',1)[0].split('(')[1].split(',').map(function(param){ return param.trim() })
                var params = param_reqs.map(function(req){ return wildcards[req].match })
                if(!func.apply(this, params)) return false;
            }
        }
        return true;
    }
    return validateCallback;
}

function runTests(tests, i, code, results){
    if(results == null) results = [];
    
    if(i == tests.length) postMessage(JSON.stringify(results));
    else if(abort) postMessage("aborted")
    else{
        for(var j=0; j<tests[i].length; j++){
            if( !match(tests[i][j].test, code, validateWith(tests[i][j].funcs)) ){
                results.push(false);
                break;
            }
            else if(j+1 == tests[i].length) results.push(true);
        }
    }
    setTimeout(function(){ runTests(tests, i+1, code, results) }, 0)   
}

addEventListener("message", function(e){
    if(e.data == "abort"){
        abort = true;
    } else {
        abort = false;
        var data = JSON.parse(e.data);
        runTests(data.tests, 0, data.code);
    }
})

postMessage("ready")