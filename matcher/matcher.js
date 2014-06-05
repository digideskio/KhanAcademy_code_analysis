function match(prog, pat){
    var pattern = acorn.parse_dammit(pat);
    var program = acorn.parse_dammit(prog);
    return match_body(program.body, pattern.body)
}

function match_body(body, pattern){
    if(pattern.length == 0) return true;
    
    var pattern_index = 0;
    for(var body_index in body){
        statement = body[body_index];
        if(match_statement(statement, pattern[pattern_index])){
            pattern_index += 1;
        }
        if(pattern_index == pattern.length) return true;
    }
    return false;
}

function match_statement(statement, pattern){
    if(pattern.type == "EmptyStatement") return true;
    if(pattern.type == "Identifier" && typeof pattern.name == "string" && pattern.name.charCodeAt(0) == 10006) return true;
    if(statement.type == pattern.type){
        for(key in pattern){
            var value = pattern[key]
            if(key == "start" || key == "end") continue;
            else if(value == null) continue;
            else{
                if(!(key in statement)) return false;
                else if(key == "body" && value instanceof Array){
                    if(! match_body(statement[key], pattern[key]))
                        return false;
                }
                else if(typeof pattern[key] == "object"){
                    if(! match_statement(statement[key], pattern[key]))
                        return false;
                }
                else{
                    if(statement[key] != pattern[key]) return false;
                }
            }
        }
        return true;
    }
}

function unwrap(text){
    console.log(JSON.stringify(acorn.parse_dammit(text), null, 4));
}