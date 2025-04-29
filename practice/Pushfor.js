 
 let array = [];
 
 const func = (item,index)=>{
     return array.push(item*3);
 }
 
 const table = [1,2,3,4,5,6,7,8,9,10];
 
 table.forEach(func);
 
 console.log(array);
 
