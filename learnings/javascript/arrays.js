// ways to create an array in javascript

//1. using Array constructor
let scores = new Array(10,9,8,7,6)
console.log(scores)

// create without new operator
let artists = Array()

// using array literals
let colors = ['red', 'green', 'blue']

// to create an empty array
let emptyArray = []

// accessing array elements
let mountains = ['Everest', 'Fuji', 'Nanga Parbat']
console.log(mountains[0])
console.log(mountains[1])
console.log(mountains[2])
console.log(mountains[6]) //undefined

// change value
mountains[2] = 'K2'
console.log(mountains)

// getting the array size
console.log(mountains.length)

// basic operations on the array

// adding element to the end of an array
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']
seas.push('Red Ses')
console.log(seas)

// adding element to the beginning of the array
let seas1 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']
seas1.unshift('Red Sea')
console.log(seas1)

// removing element from the end of an array
let seas2 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']
const lastElement = seas2.pop()
console.log(lastElement)

// removing element from the beginning of the array
let seas3 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']
const beginningElement = seas3.shift()
console.log(beginningElement)

// finding the index of an element from the array
let seas4 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea']
let index = seas4.indexOf('North Sea')
console.log(index)

// check if the value is an array
console.log(Array.isArray(seas4))