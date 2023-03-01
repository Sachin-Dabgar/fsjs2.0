var user = {
    firstName: "Sachin",
    lastName: "Dabgar",
    role: "admin",
    loginCount: 32,
    facebookSignIn: true
}

console.log(user.firstName);
console.log(user['lastName'])

user.loginCount = 44
console.log(user.loginCount)

console.log(user)