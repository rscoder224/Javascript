// Method in JavaScript
// function Inside Object


function  personInfo(){
    console.log(`person name is ${this.name} and person age is ${this.age}`);
}


const person = {
    name : 'Shaurya',
    age : 19,
    about : personInfo
}

const person2 = {
    name : 'Divyanshu',
    age : 17,
    about : personInfo
}

const person3 = {
    name : 'Naitik',
    age : 13,
    about : personInfo
}


person.about();
person2.about();
person3.about();



