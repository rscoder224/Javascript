.


// maps Object

// difference between maps and objects

// objects can only have string or symbol
// key

// in maps you can use anything as key
// like array , number , string

// const person = {
//     firstName : "shaurya",
//     lastName : "tiwari",
//     age:22,
//     "phone number": 9902028883
// };


// console.log(typeof person["phone number"]);

// objects lieral 
// key --> string
// keys --> symbol



// const person = new Map();
// console.log(person);


// person.set('firstName','Shaurya');

// person.set(7,7890078654);


// console.log(person);


// console.log(person.get(7));


// console.log(person.keys());

// // const new1 = [];

// // for(let key of person){
// //     new1.push(key, typeof key);
// // }








// for(let key of person.keys()){
//     console.log(key, typeof key);
// }



// const person1 = {
//     id : 1,
//     firstName : "shaurya",
//     'phone number' : 8934092387
// }


// const phone = new Map();

// set(contact,person1['phone number']);

// console.log(phone);


const userData = new Map();

userData.set('firstName', 'Shaurya')

console.log(userData);


 const person3 = {
     id : 98882733
 };
 

const userInfo = new Map();

userInfo.set(person3,{firstName: 'shaurya', age: 22, room : 'Cs35'});

console.log(userInfo.get(person3).firstName);



for(let [key , value] of userInfo){
    console.log(key , value);
}







