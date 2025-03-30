// parameter destructuring
// object
// react
const person = {
    firstName: "Shaurya",
    gender : "Male",
    age : 22
}

// const details = (obj) =>{
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// details(person);

const fetch = ({firstName, gender,age}) => {
    console.log(firstName);
    console.log(age);
    console.log(gender);
}


fetch(person);


