/**
 * Define a function that can answer the role of a user.
 * A user can be on following roles:
 * admin - with all access
 * subadmin - with access to create/delete courses
 * testprep - with access to create/delte tests
 * user - consume all content
 * other - trial user.
 * 
 * Input : getUserRole(name, role)
 */

let getUserRole = function (name, role){
    switch(role){
        case 'admin':
            return `${name} with all access`
            break
        case "subadmin":
            return `${name} with access to create/delete courses`
            break
        case "testprep":
            return `${name} with access to create/delete tests`
            break
        case "user":
            return `${name} consume all content`
            break
        default:
            return `${name} is a trial user`
    }     
}

console.log(getUserRole("sachin", "someone"))