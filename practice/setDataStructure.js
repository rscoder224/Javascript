
// Set data structure in javaScript


const numbers = new Set([1,2,3,4,5]);

console.log(numbers);


const anArray = [1,2,3,4,3,2,4,5,6,8,8];


const uniqueValue = new Set(anArray);

console.log(uniqueValue);

let length = 0;

for(item of uniqueValue){
    length++;
}


console.log(length);
