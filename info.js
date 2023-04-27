// display conetent on display from button
function display(conetent){
    result.value += conetent
}
// all clear
function allClear(){
    result.value = ""
}
// calculaate
function calculaate(){
    try{
        result.value = eval(result.value)
    }
    // invalid expression
    catch{
        alert('invalid expresion')
    }
}
// back
function removelast(){
    result.value = result.value.slice(0,-1)
}
