// important methods inside the array

// foreach
// map 
// filter
// reduce

const array1 = [12,23,21,13];

const myprint = (arr,num)=>{
    for(let item in arr){
        console.log(`Index is`, item);
        console.log(`${arr[item]} X ${num} = ${arr[item]*num} `);
    }
    }


myprint(array1,2);

