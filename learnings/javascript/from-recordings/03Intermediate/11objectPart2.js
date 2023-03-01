var user = {
    firstName: "Sachin",
    lastName: "Dabgar",
    role: "admin",
    loginCount: 32,
    facebookSignIn: true,

    courseList: [],
    buyCourse: function(courseName){
        this.courseList.push(courseName)
    },

    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    }
}

console.log(user.getCourseCount())
user.buyCourse("React JS course")
user.buyCourse("Angular JS course")
console.log(user.getCourseCount())