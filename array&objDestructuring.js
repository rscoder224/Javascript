// Computed Properties in JavaScript

const key1 = "one";
const key2 = "two";


const fruit1 = "Mango";
const fruit2 = "Papaya";


const obj = {};

obj[key1] = fruit1;

obj[key2] = fruit2;

console.log(obj);


// array destructuring

const arra1 = ["Raju", "Suresh", "Bhanu", "Kumar"];

let[,name1,name2,...billu] = arra1;

console.log(name1);
console.log(name2);


let var1 = "bvxegfvvfgvfdcvhjcvfrfcehr";

let array1 = [...var1];

console.log(array1);


// obj destructuring

const band = {
    bandName : "Shaurya",
    famous_song : "har pal hai tishnazi" 
};

const{bandName:babuName,...obj2} = band;

console.log(babuName);





