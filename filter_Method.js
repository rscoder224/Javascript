// filter method 
// It return boolean Value True or False
// if condition becames true than it stores that Value inside it.

const numbers = [1,2,3,4,5,6,7,8,9,10];

const isEven = numbers.filter((number)=>{
    return number %2 === 0; 
});


const isOdd = numbers.filter((number)=>{
  return number %2 !== 0;
})
console.log(isEven);
console.log(isOdd);




