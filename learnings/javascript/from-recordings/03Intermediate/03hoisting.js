tipper(5)

function tipper(a){
    let tip = a + 5
    console.log(`your tip is ${tip}`)
}


// this is hoisting
// function declarations are scanned and made available
// variable declarations are scanned and made undefined


// bigTipper(5)

var bigTipper = function(a){
    let tip = a + 15
    console.log(`your tip is ${tip}`)  
}


console.log(name)
var name = "sachin"