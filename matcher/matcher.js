function match(prog, pat){
    var pattern = acorn.parse_dammit(pat);
    var program = acorn.parse_dammit(prog);
    return match_body(program.body, pattern.body)
}

function match_body(body, pattern){
    if(pattern.length == 0) return true;
    
    pattern_index = 0;
    for(var body_index in body){
        statement = body[body_index];
        //console.log(statement)
        //console.log(pattern[pattern_index])
        if(match_statement(statement, pattern[pattern_index])){
            pattern_index += 1;
        }
        if(pattern_index == pattern.length) return true;
    }
    return false;
}

function match_statement(statement, pattern){
    if(statement.type == pattern.type) return true;
    else return false;
}

function unwrap(text){
    console.log(JSON.stringify(acorn.parse_dammit(text), null, 4));
}