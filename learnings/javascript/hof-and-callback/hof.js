// hof = higher order function
// callback
// function is calling a function

// higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// function a(){
//     console.log("i was called by a function")
// }


// function b(){
//     a()
// }

// b()


// hof example
// function callback(n){
//     return n**2;
// }

// function cube(callback, n){
//     return callback(n) * n
// }

// console.log(cube(callback, 3))

// for each

// let arr = ['hey', 'hi', 'hello', 'hola', 'namaste']

// arr.forEach((val)=>{
//     console.log(val)
// })

// set time out

// setTimeout(()=>{
//     console.log("hi")
// }, 3000)

// set interval

setInterval(() => {
    console.log("something")
}, 1000)