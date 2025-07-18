// important String methods

let string = "Shaurya  ";

console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.trim().length);
console.log(string.slice(2,5));

// template Strings 

let temp1 = "Hello Everyone my name is "

let temp2 = "Shaurya and I am 22 years Old"

console.log(`${temp1}${temp2}`);

// bigInt 
// method 1 

let bignum  = BigInt(1229293994940393);



let lucknow = 2839949949499939393n

console.log(bignum,lucknow);

console.log(typeof lucknow);

// if Else Operator

let a = 23;
let b = 24;

if(a> b){
    console.log("hello ! bro How are You")
}

if(b>a){
    console.log("yes");
}

// ternary operator


let umar = 15;

let drink = umar > 18 ? "coffee" : "MIlk";

console.log(drink);


// while Loop
let num = 10;
let total = 0;
let i = 0
while(i <= num){
total = total + i;
console.log(i);
i++;
}
console.log(total);

// for loop
for(let i = 0 ; i <= num; i++){
    console.log(i);
}

// do wHILE LOOP

do{
    console.log(i)
    i++
}while(i<= 100)


let day = 5;

switch(day) {
    case 1 : console.log("Monday")
    break;
    case 2 : console.log("Tuesday")
    break;
    case 3 : console.log("Thursday")
    break;
    case 4 : console.log("Friday")
    break;
    case 5 : console.log("Saturday")
    break;
    case 6 : console.log("Sunday")
    break;
    default : console.log("invalid day" )
    
}


// array collection Of element

let arr1 = [1,2,4,5,6,7];

console.log(Array.isArray(arr1));


for(i = 8; i<= 60; i++){
    arr1.push(i);
}


console.log(arr1);

let arr2 = [...arr1,99,89];

console.log(arr2);

let fortyFive = arr2[43];

console.log(fortyFive);


let arr3 = arr2;


for(let i = 0 ; i<= 10; i++){
    arr3.pop()
}
console.log(arr3);



let  arr4 = [];
// arr4.unshift(22)


for(let i = -100; i <= -1; i++ ){
    arr4.unshift(i);
}

console.log(arr4);


let arr5 = arr4;

for(let i= 0 ; i <= 9; i++){
    arr5.shift();
}

console.log(arr5);

let arr6 = [].concat(arr5);

let arr7 = arr5.slice(0);

console.log(arr6);
console.log(arr7);

let arr8 = [];

for(let item of arr3){
    arr8.unshift(item);
}

console.log(arr8);

let arr9  = [];

for(items in arr8){
    arr9.unshift(arr8[items]);
}
console.log(arr9);


// array destructuring 


const myarr = ["value1", "value 0" , "value2"];

let[var1, , var2] = myarr;

console.log(var1);
console.log(var2);


const myarr1 = ["value1", "value 2" , "value0","value99","value33"];

let [myvari1,myvari2,...myvari3] = myarr1;

console.log(myarr);


// objects in JavaScript 

const alpha = {
    band : "alpha",
    age : 22,
    arrval : [1,2,3,4,5,6,7,8]
}

alpha.famousSong = "Teri Yaad Aati";

console.log(alpha);

console.log(alpha["arrval"]);

// ======>>>>>  Iterating Objects using For in Loop

// for(key in alpha){
//     console.log(`${key} : ${alpha[key]}`);

// }

for(key of Object.keys(alpha)){
    console.log(` ${key}  :${alpha[key]}`);
}






















