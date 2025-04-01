// set data_structure in javaScript
// sets (it is iterable)
// store data
// set also have its own methods
// No index based access
// order is not guranteed
// unique items only (no duplicates allowed);


 const items = ["item",'item2','item',24,24,42,8,8,9,2,2,0];

const numbers= new Set([1,2,3,4,5,7,8,9,0]);

numbers.add(items);

console.log(numbers);


if(numbers.has(2)){
    console.log("2 is present");
}else { console.log('2 is not present');};


for(let items of numbers){
    console.log(items);
}


const uniqueElements = new Set(items);
console.log(uniqueElements);






















