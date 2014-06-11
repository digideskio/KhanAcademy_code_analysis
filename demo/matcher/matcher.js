parse = acorn.parse_dammit;

function isBroken(value){
    return value.type == "Identifier" && typeof value.name == "string" && (value.name.charCodeAt(0) == 10006 || value.name.charCodeAt(0) == 226)
}
function isEmpty(value){
    return value == null || value.type == "EmptyStatement" || isBroken(value)
}
debug_lvl = -1;
function debug(msg, level){
    if(level == null) level = 1
    if(level <= debug_lvl) console.log(msg);
}

function expand_declarations(old_ast){
    var new_ast = [];
    for(var i=0; i<old_ast.length; i++){
        value = old_ast[i];
        if(value.type == "VariableDeclaration"){ // Unwrap variable declaration
            debug(value);
            var extension = []
            for(var j=0; j<value.declarations.length; j++){
                d = value.declarations[j]
                extension.push(d);
                if(d.init != null){
                    extension.push({
                        type: "ExpressionStatement",
                        expression: {
                            type: "AssignmentExpression",
                            operator: "=",
                            left: d.id,
                            right: d.init
                        }
                    })
                    d.init = null;
                }
            }
            new_ast = new_ast.concat(extension)
        }
        else{
            new_ast.push(value);
        }
    }
    return new_ast;
}


function preprocess_body(ast, wildcards){
    var whitelist = [];
    var blacklist = [];
    
    for(var i=0; i<ast.length; i++){
        if(ast[i].type == "ExpressionStatement" && ast[i].expression.type == "UnaryExpression" && isBroken(ast[i].expression.argument)){
            if(isEmpty(ast[i+1])) continue;
            blacklist.push(preprocess_obj(ast[i+1], wildcards))
            i++
        }
        else if(isEmpty(ast[i])) continue;
        else whitelist.push(preprocess_obj(ast[i], wildcards))   
    }
    body = expand_declarations(whitelist)
    body.blacklist = expand_declarations(blacklist);
    return body;
}
function preprocess_obj(obj, wildcards){
    debug(["pp_obj", obj, wildcards], 2)
    if(typeof obj != "object") return obj;
    else if(wildcards && obj.type == "Identifier" && obj.name.slice(0,1) == "$" && obj.name.length > 1 && obj.name.slice(1,2) != "$"){
        if(!(obj.name in wildcards)){
            wildcards[obj.name] = {type: 'wildcard', skip: 0};
            wildcards.order.push(wildcards[obj.name])
        }
        return wildcards[obj.name]
    } else { //Is object
        for(key in obj){
            if(isEmpty(obj[key])) obj[key] = null;
            else if(key == 'body' && obj.body instanceof Array) obj[key] = preprocess_body(obj.body, wildcards)
            else obj[key] = preprocess_obj(obj[key], wildcards);
        }
        return obj
    }
}

function match(pat, prog, validateCallback){
    var wildcards = {order: []};
    var pattern = preprocess_body(acorn.parse_dammit(pat).body, wildcards);
    var program = preprocess_body(acorn.parse_dammit(prog).body);
    
    for(var timeout=0; timeout < 10000; timeout++){
        debug(JSON.stringify(Object.keys(wildcards).map(function(k){ return wildcards[k] })), 0)
        res = match_body(pattern, program, wildcards);
        if(res == true && (!validateCallback || validateCallback(wildcards))) return true;
        else{
            if(wildcards.order.length == 0) return false;
            var pushed = false;
            for(var i=wildcards.order.length; i--; ){
                card = wildcards.order[i]
                if(!pushed){
                    if(card.matched == true){
                        card.skip++;
                        pushed = true;
                    }
                    else card.skip = 0;
                }
                card.skipped = 0;
                card.matched = 0;
            }
            if(!pushed) return false;
        }
    }
    return false;
}


function match_body(pattern, body){
    debug(["match_body", pattern, body])
    var pattern_index = 0;
    if(pattern.length > 0){
        for(var body_index=0; body_index<body.length; body_index++){
            if(match_statement(pattern[pattern_index], body[body_index])){
                pattern_index += 1;
            }
            if(pattern_index == pattern.length) break;
        }
    }
    if(pattern_index == pattern.length){
        if(pattern.blacklist == null || pattern.blacklist.length == 0 || !match_body(pattern.blacklist, body)) return true;
    }
    return false;
}

function match_statement(pattern, statement, key){
    debug(["match_statement", pattern, statement, key])
    if(pattern == null){ debug("pattern is null"); return true; }
    else if(statement == null) return false;
    
    else if(typeof pattern == "object" && pattern.type == "Identifier" && pattern.name == "_") return true;
    else if(typeof pattern == "object" && pattern.type == "wildcard"){
        if(pattern.matched) pattern = pattern.match;
        else if(pattern.skipped < pattern.skip) pattern.skipped++;
        else{
            pattern.matched = true;
            pattern.match = statement;
            return true;
        }
    }
    
    if(key == 'body' && pattern instanceof Array){
        if(!(statement instanceof Array)) return false;
        return match_body(pattern, statement)
    }
    else if(pattern instanceof Array){
        if(!(statement instanceof Array)) return false;
        return match_list(pattern, statement);
    }
    else if(typeof pattern == "object"){
        if(!(typeof statement == "object")) return false;
        return match_object(pattern, statement);
    }
    else return pattern == statement;
}

function match_object(pattern, obj){
    debug(["match_object", pattern, obj])
    if(pattern.type != obj.type) return false;
    for(key in pattern){
        if(!pattern.hasOwnProperty(key))  continue; // Skip inheritted properties
        if(key == "start" || key == "end" || key == "loc") continue; //Skip location properties
        if(!match_statement(pattern[key], obj[key], key)) return false;
    }
    return true;
}
    
function match_list(pattern, list){
    debug(["match_list", pattern, list])
    for(var i=0; i<pattern.length; i++){
        if(pattern[i].type == "Identifier" && pattern[i].name == "$$_") return true;
        else if(!match_statement(pattern[i], list[i])) return false;
    }
    if(list.length > pattern.length) return false;
    return true;
}


function show(obj){
    console.log(JSON.stringify(obj, null, 4));
}




function run_test(){
// Switch-Case 
console.log(match("switch(){ }", "switch(){}") == true);
console.log(match("switch(){ }", "switch(){{case 0: ;}") == false);
console.log(match("switch(){ case _: }", "switch(){ case 0:}") == true);

// Function declaration
console.log(match("var _ = function(){ var _; while(){} }", "var bigfun = function(){var e; while(){} }") == true);
console.log(match("var _ = function($$_){}", "var bigfun = function(a, b){}") == true);
console.log(match("var _ = function($$_){}", "var bigfun = function(a){}") == true);
console.log(match("var _ = function(_){}", "var bigfun = function(a){}") == true);
console.log(match("var _ = function(_){}", "var bigfun = function(a, b){}") == false);
console.log(match("var _ = function(_, _, _){}", "var bigfun = function(a, b, c){}") == true);

// Variable declaration
console.log(match("var _ = k", "var bigfun = k") == true);
console.log(match("var f = k", "var bigfun = k") == false);
console.log(match("var bigfun = 4", "var bigfun = 4") == true);
console.log(match("var _, _, _", "var a; var b; var c;") == true);
console.log(match("var _; var _; var _;", "var a, b, c;") == true);
console.log(match("var _; var _; var _;", "var a, b;") == false);

// Assignment
console.log(match("a = b;", "a = b;") == true);
console.log(match("c = b;", "a = b;") == false);
console.log(match("_ = b;", "a = b;") == true);
console.log(match("a = 90;", "a = b;") == false);
console.log(match("_ += 11;", "a += 11;") == true);
console.log(match("_ = 11;", "a += 11;") == false);
    
// Compsoition
console.log(match("var _; var _; for(){ !;while(){} for(){} } !;while(){  }", "var var_a,b; for(var i=1; i<10; i++){ for(b=1; b--; ){ var for_b; } }") == true);
console.log(match("var _; var _; for(){ !;while(){} for(){} } !;while(){  }", "var var_a,b; while(true){} for(var i=1; i<10; i++){ for(b=1; b--; ){ var for_b; } }") == false);
console.log(match("var _; var _; for(){ !;while(){} for(){} } !;while(){  }", "var var_a,b; while(true){ for(b=1; b--; ){ var for_b; } }") == false);
}