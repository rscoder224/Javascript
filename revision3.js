
const array1 = ["apple","mango","banana","pineapple"];

let array2 = [];

array1.forEach((item,index)=>{
       array2.push(`${item} is at index ${index}`);
}
);

console.log(array2);


//  const result =  array1.map((item,index)=>{
//         if(item[0] === 'a' || item[0] === 'm'){
//             return `${item} is helpful `;
//         } return `-1`;
// });
// console.log(result);

// // filter 
//     const ans = array1.filter((item)=>{
//         if(item[0]=== 'b' || item[0]=== 'p'){
//             return `${item}`
//         }
//     });

// console.log(ans);

