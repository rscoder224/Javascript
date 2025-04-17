
// Map DataStructure


const person = new Map();

person.set('firstName',"Shaurya");
person.set(1,889);


console.log(person);
console.log(person.keys());
console.log(person.get('firstName'));


for(let key of person.keys()){
    console.log(key, typeof key);
}
