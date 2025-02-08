// Practicing String indexing

let firstName = "Ramu";
console.log(firstName[0]);

// .length property
console.log(firstName.length);

console.log(firstName[firstName.length-1]);

// some methods in javascript 
// trim -=========>>> Used to remove unecessary space from the string
// trim 

const person =[{ name: "       shaurya", course: "btech", rollno : "393"},
    {name: "       keshr", course: "btech", rollno : "39"},
    {name: "       naresh", course: "btech", rollno : "93"}]

const [{name: myname}, {name:myname2}, {name:myname3}] = person

console.log(person);

const names = {myname,myname2,myname3};

console.log(names);
let var1  = names["myname"].trim();
let var2  = names["myname2"].trim();
let var3  = names["myname3"].trim();


const main = {
    var1, 
    var2,
    var3
}

console.log(main);



// to lower case 
console.log(var1.toLowerCase());
console.log(var2.toLowerCase());
console.log(var3.toLowerCase());

// toUpperCase

console.log(var1.toUpperCase());
console.log(var2.toUpperCase());
console.log(var3.toUpperCase());


