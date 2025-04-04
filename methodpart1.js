// proto , prototype , class

// const user = {
//     firstName : 'Shaurya',
//     lastName : 'Tiwari',
//     email : 'shaurya232@gmail.com',
//     age : 21,
//     address : 'Adarsh Vihar Colony Buddheswar Lucknow',
//     about : function() {
//         return `${this.firstName} is ${this.age} `
//     },
//     is18 : function() {
//         return this.age >= 18;
//     }
    
// }


// function
// 1. we are going to create an object 
// 2. add key value pair in it
// 3. object ko return Karega

// proto , prototype , class

// const user = {
//     firstName : 'Shaurya',
//     lastName : 'Tiwari',
//     email : 'shaurya232@gmail.com',
//     age : 21,
//     address : 'Adarsh Vihar Colony Buddheswar Lucknow',
//     about : function() {
//         return `${this.firstName} is ${this.age} `
//     },
//     is18 : function() {
//         return this.age >= 18;
//     }
    
// }


// function
// 1. we are going to create an object 
// 2. add key value pair in it
// 3. object ko return Karega

function createUser(firstName,lastname,email,age,address){
const user = {};
        user.firstName = firstName;
        user.lastname = lastname;
        user.email =  email;
        user.age =    age;
        user.address = address;
         user.about = function() {
        return `${this.firstName} is ${this.age} `
    };
    
    user.is18 = function() {
        return this.age >= 18;
    };
    
    return user;
}

const user1 = createUser('shaurya','Tiwari','Shaurya44@gmail.com',19,'adarsh vihar colony buddheswar Lucknow');

console.log(user1);



console.log(user1);
console.log(user1.about());
console.log(user1.is18());



// next part in method part-2;























