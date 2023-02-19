const objects = {
    rocket: '🚀',
    home: '🏠'
};

// console.log(objects)

// string, bigint, number, boolean, null, undefine, symbol => these are not object.
// apart from all the above everything in javaScript is object.

// defining an object

const obj1 = {
    rocket: '🚀',
    fuel: 2,
    config: {
        name: 'mars'
    }
}

/* in above example
    obj1 => name of an object
    rocket: '🚀' => this is the property of an object obj1
    where rocket => key
          '🚀' => value of the key rocket.
*/

// we can modify the values inside an object and add key to the object

console.log(obj1.fuel)
obj1['year'] = 2002

console.log(obj1)

// we can not assign the complete new object to the const object.
// yes values can be chnage and added but you can not assign complete new object to the const object itself.

// obj1 = {name: 'sachin'}
// console.log(obj1)


// part 2

// constructor based object

const obj2 = new Object()
obj2.redbook = '📕'
obj2.bluebook = '📘'
// obj2.1greenbook = '📗' this is not valid key name
obj2.myValue = '1 red book and 1 blue book'

console.log(obj2)


// part 3

const powers = {
    fly: true,
    cordinate: Math.random() + 2
}

const obj3 = Object.create(powers)
console.log(obj3) // will show empty object
console.log(obj3.cordinate) // how are we able to access? below is the ans for this...😃

//but we can get all the properties of powers object using below statement
console.log(Object.getPrototypeOf(obj3)) // this allows me to get all the prototypes available from parent objects.


// part 4

const obj4 = Object.create({}) // we have to pass at least an empty object or any other object reference.
console.log(Object.getPrototypeOf(obj4))

Object.defineProperty(obj4, 'book', {
    // icon: '📘' we can not do this, it more works like getters and setters (privacy de raha hai..)
    get: () => '📘',
    enumerable: true // enabling this to loop throgh this object.
})

console.log(obj4) // why empty??
console.log(Object.getPrototypeOf(obj4)) // why this is even empty??
console.log(obj4.book)

// now let's try to loop through the obj4

console.log("results after for loop.........")

for(k in obj4){
    console.log(obj4[k])
}


// part 5

let pen = 'sachin'

const obj5 = {
    comics: 'marvel',
    pen: '',
    printComic: function(){
        this.pen += '🖊️' // here we are using this keyword to refer this obj5 wala pen. otherwise it doesn't know outside world.
        console.log(this)
        // return this // if you want to refer this object in next chain.
    },

    printComic1: () => {
        // this.pen += '🖊️' // we can not use this keyword in arrow function. 
        console.log(this)
    }
}

obj5.printComic1() // this did not add pen to the obj5.
console.log(obj5)
obj5.printComic()
console.log(obj5)
obj5.printComic()
console.log(obj5)


// function chaining
console.log(obj5.printComic().printComic().printComic())
// upar wala me kya hoga ki pehle wale function ka result will be used in second and then third and so on...


