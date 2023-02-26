// create empty object
let empty = {}

// object with properties.
let person = {
    firstname: "sachin",
    lastname: "dabgar"
}

// accessing properties

// dot notation
console.log(person.firstname)
console.log(person.lastname)


// Array like notation
console.log(person['firstname'])
console.log(person['lastname'])

// gives undefined
console.log(person.age)

// modify the value of the property
person.firstname = 'amit'
console.log(person.firstname)
console.log(person)

person.age = 25
console.log(person)

delete person.lastname
console.log(person)

console.log('firstname' in person)