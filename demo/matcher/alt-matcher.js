var parse = acorn.parse_dammit;

function isBroken(value){
    return value.type == "Identifier" && typeof value.name == "string" && value.name.charCodeAt(0) == 10006
}
function isNull(value){
    return value == null || value.type == "EmptyStatement" || isBroken(value)
}

function expand_declarations(old_ast){
    var new_ast = [];
    for(var i=0; i<old_ast.length; i++){
        value = old_ast[i];
        if(value.type == "VariableDeclaration"){
            new_ast = new_ast.concat(value.declarations)
        }
        else{
            new_ast.push(value);
        }
    }
    return new_ast;
}


function preprocess_body(ast){
    var whitelist = [];
    var blacklist = [];
    
    for(var i=0; i<ast.length; i++){
        if(ast[i].type == "ExpressionStatement" && ast[i].expression.type == "UnaryExpression" && isBroken(ast[i].expression.argument)){
            blacklist.push(preprocess_obj(ast[i+1]))
            i++
        }
        else whitelist.push(preprocess_obj(ast[i]))   
    }
    body = expand_declarations(whitelist)
    body.blacklist = expand_declarations(blacklist);
    return body;
}
function preprocess_obj(obj){
    if(obj == null || typeof obj != "object") return obj;
    else{ //Is object
        if('body' in obj && obj.body instanceof Array){
            obj.body = preprocess_body(obj.body)
        }
        else{
            for(key in obj){
                obj[key] = preprocess_obj(obj[key])
            }
        }
        return obj
    }
}

function name_block(block){
    switch(block.type){
        case "IfStatement":
            return "if statement" 
        case "WhileStatement":
            return "while statement"
        case "ForStatement":
            return "for statement"
        case "VariableDeclarator":
            if(block.init != null && block.init.type == "FunctionExpression") return "function declaration"
            else return "variable declaration"
        case "ExpressionStatement":
            if(pattern.expression.type == "AssignmentExpression") return block.expression.operator+" statement"
    }
    return "<<honestly, idk: "+block.type+">>"
}
function identify_container(container){
    console.log(["identify_container", container])
    if(container != null) return container.root_name+" starting on line "+container.loc.start.line
    return ""
}
function wrap_error(error_message, container, expected){
    if(expected == undefined || expected ) return "We expect you'll use "+error_message+" in the "+identify_container(container);
    else return "We didn't expect you to use"+stmt+" in the "+identify_container(container);
}

function match(pat, prog){
    var pattern = preprocess_body(acorn.parse_dammit(pat).body);
    var program = preprocess_body(acorn.parse_dammit(prog, {locations: true}).body);
    console.log(program)
    try{
        if(match_body(pattern, program)[0]) return [true]
    } catch(err){
        if(err.name != "MatchError") throw err;
        return [false, err.message]
    }
}

function match_body_wrapper(pattern_obj, body_obj, container_name){
    body_obj.root_name = container_name
    console.log(["match_body_wrapper", pattern_obj, body_obj])
    if(isNull(pattern_obj)){ console.log("pattern is null"); return true; }
    else if(isNull(body_obj)) throw { name: "MatchError", message: "We expected a body on the "+identify_container(body_obj)}
    
    return match_body(pattern_obj.body, body_obj.body, body_obj)
}
function match_body(pattern, body, body_obj){ //Body obj, is just for constructing error messages
    console.log(["match_body", pattern, body, body_obj])
    var pattern_index = 0;
    var pattern_error = "";
    if(pattern.length > 0){
        for(var body_index = 0; body_index < body.length; body_index++){
            var res = match_statement(pattern[pattern_index], body[body_index])
            if(res[0]){
                pattern_index += 1;
                pattern_error == "";
            }
            else {
                if(res[1] != "") pattern_error = res[1]
            }
            if(pattern_index == pattern.length) break;
        }
    }
    if(pattern_index < pattern.length){
        if(pattern_error != "") throw {name: "MatchError", message: wrap_error(pattern_error, body_obj)}
        else throw {name: "MatchError", message: wrap_error(name_block(pattern[pattern_index]), body_obj)}
    }
    //TODO Blacklisting is fucked right now!!!
    else{
        if(pattern.blacklist == null || pattern.blacklist.length == 0 || !match_body(pattern.blacklist, body)) return true;
    }
    return false;
}

function match_statement(pattern, statement){
    console.log(["match_statement", pattern, statement])
    if(pattern.type != statement.type) return [false, "x"];
    switch(pattern.type){
        case "IfStatement":
            match_body_wrapper(pattern.consequent, statement.consequent)
            match_body_wrapper(pattern.alternate, statement.alternate)
            return [true, ""];
        case "WhileStatement":
            match_body_wrapper(pattern.body, statement.body, "while statement")
            return [true, ""];
        case "ForStatement":
            match_body_wrapper(pattern.body, statement.body, "for statement")
            return [true, ""];
        case "VariableDeclarator":
            if(!match_identifier(pattern.id, statement.id)) return [false, "x"];
            if(pattern.init != null && pattern.init.type == "FunctionExpression"){
                if(statement.init == null || statement.init.type != "FunctionExpression") return [false, "x"]; 
                else if(!match_body_wrapper(pattern.init.body, statement.init.body)) return [false, "x"];
                else if(!(pattern.init.params.length == 1 && pattern.init.params[0].name == "$_") && pattern.init.params.length != statement.init.params.length) return false;
            }
            return [true, ""]
        case "ExpressionStatement":
            if(pattern.expression.type == "AssignmentExpression"){
                pat_expr = pattern.expression;
                stat_expr = statement.expression;
                if(stat_expr.type != "AssignmentExpression") return [false, "x"];
                if(pat_expr.operator != stat_expr.operator) return [false, "x"];
                if(!match_identifier(pat_expr.left, stat_expr.left)) return [false, "x"];
                return [true, ""];
            }
        case "SwitchStatement":
            if(!(pattern.cases.length == 1 && pattern.cases[0].consequent.length == 1 && pattern.cases[0].consequent[0].type == "ExpressionStatement" && pattern.cases[0].consequent[0].expression.type == "Identifier" && pattern.cases[0].consequent[0].expression.name == "$_") && (pattern.cases.length != statement.cases.length)) return [false, "x"];
            return [true, ""];
        console.log("INVALID STATEMENT IN PATTERN!!")
    }
    console.log("unresolveable type");
    return [false, "x"];
}

function match_identifier(pattern_id, statement_id){
    //console.log(["match_identifier", pattern_id, statement_id])
    if(pattern_id.name == "_" || isBroken(pattern_id)) return true;
    if(pattern_id.name == null) return false;
    return pattern_id.name == statement_id.name;
}

function show(obj){
    console.log(JSON.stringify(obj, null, 4));
}

function run_test(){
    // Switch-Case
    console.log(match("switch(_){ $_ }", "switch(a){}") == true);
    console.log(match("switch(){ $_ }", "switch(){}") == true);
    console.log(match("switch(){ $_ }", "switch(){case 0: ;}") == true);
    console.log(match("switch(){ }", "switch(){}") == true);
    console.log(match("switch(){ }", "switch(){{case 0: ;}") == false);
    console.log(match("switch(){ case _: }", "switch(){ case 0:}") == true);

    // Function declaration
    console.log(match("var _ = function(){ var _; while(){} }", "var bigfun = function(){var e; while(){} }") == true);
    console.log(match("var _ = function($_){}", "var bigfun = function(a, b){}") == true);
    console.log(match("var _ = function($_){}", "var bigfun = function(a){}") == true);
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
    console.log(match("a = 90;", "a = b;") == true); // Doesn't consider right side
    console.log(match("_ += 11;", "a += 11;") == true);
    console.log(match("_ = 11;", "a += 11;") == false);

    // Compsoition
    console.log(match("var _; var _; for(){ !;while(){} for(){} } !;while(){  }", "var var_a,b; for(var i=1; i<10; i++){ for(b=1; b--; ){ var for_b; } }") == true);
    console.log(match("var _; var _; for(){ !;while(){} for(){} } !;while(){  }", "var var_a,b; while(true){} for(var i=1; i<10; i++){ for(b=1; b--; ){ var for_b; } }") == false);
    console.log(match("var _; var _; for(){ !;while(){} for(){} } !;while(){  }", "var var_a,b; while(true){ for(b=1; b--; ){ var for_b; } }") == false);
}

