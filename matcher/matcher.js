function test(code, pattern){
    
}
function unwrap(text){
    console.log(JSON.stringify(acorn.parse_dammit(text), null, 4));
}