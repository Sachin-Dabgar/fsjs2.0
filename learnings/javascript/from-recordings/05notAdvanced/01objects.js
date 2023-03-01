var User = function(firstName, courseCount){
    this.firstName = firstName
    this.courseCount = courseCount
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`)
    }
}

User.prototype.getFirstname = function(){
    console.log(`Your first name is: ${this.firstName}`)
}

var hitesh = new User('hitesh', 2)
hitesh.getCourseCount()
hitesh.getFirstname()

var sam = new User('sam', 5)
sam.getCourseCount()
sam.getFirstname()