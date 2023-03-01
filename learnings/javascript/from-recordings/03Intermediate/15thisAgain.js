// for all regular function calls, this points to window object

console.log(this)

var user = {
    firstName: "Sachin",
    courseCount: 4,
    getCourseCount: function(){
        console.log('line 9', this)
    }
}

user.getCourseCount()