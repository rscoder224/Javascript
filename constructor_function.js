// constructor function In javaScript
// using new keyword
// Doing three works Creating Object, setting object as prototype of the function

function createUser(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.age      = age;
    return this;
}

createUser.prototype.about = function (){
    return `user age is ${this.age} and name is ${this.firstName}`
}


const user1 =  new createUser("Shaurya","Tiwari",23);


console.log(user1.about());







