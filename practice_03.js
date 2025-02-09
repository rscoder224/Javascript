// concatination 

let firstName = "shaurya";

let age = 21;

let course = "Btech";

console.log(course.slice(1,4));

// method one

// let aboutMe = "Hello! Everyone my name is" + " " + firstName + " " + "and my age is "  +  " " + age + ". " + "I am persuing" + " " + course; 

// console.log(aboutMe);

// second method Using Template strings

let aboutMe = `Hello everyone my name is ${firstName} and
my age is ${age}. I am persuing ${course}`;

console.log(aboutMe);

let str1 = "hello bro this is shaurya";

let str2 = "And I am pursuing Btech";


let myInfo = `${str1}  ${str2}`;



