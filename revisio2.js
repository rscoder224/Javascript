// objects in JS
const obj1 = {
    name : "Shaurya",
    "Phone number" : 83838383999,
    age : 22
}

for(key of Object.keys(obj1)){
    console.log(`${key} : ${obj1[key]}`);
}


// Computed Properties in Js

const key1 = "objkey1";
const key2 = "objkey2";

const val1 = "objval1"
const val2 = "objval2"

// const obj = {
//     objkey1 : "objval1",
//     objkey2 : "objval2"
// }



// const obj = {
//     [key1] : val1,
    
//     [key2]  : val2
// }

// console.log(obj);


// Array Destructuring

// let array = ["Rahul", "Suresh","Sandeep","Ajay"];

// let [name1, ,name2, name3,] = array;

// console.log(name1);
// console.log(name2);
// console.log(name3);


// const objx = {..."abcdefghijklmnopqrstuvwxyz"}
// console.log(objx);


// object Destructuring 
    
    const bandName = {
        band : "Shaurya",
        "Famous Song" : "Har Pal Hai Tishnazi",
        since : 2017
        }
        
        let {band, famous_song,yearPub} = bandName;
        
    
       band = "Xtreme"
      console.log(band);



    // function of JavaScript 
    // functions are like servents in a programming Language
    
    // function Declaration
    
    function nachoo(){
        console.log("hello Everyone Please Mere Saath Naachoo");
    }
    
    nachoo();
    
    // function Expression 
    
    const myarr = [1,3,45,55,87,77];
    
    const targetfind = function(arr,target){
        let i = 0;
        while(i <= arr.length){
            if(arr[i] === target){
              return `Target ${target} Achived at index ${i} `;
            }
          i++;
        } return ` Target Not Achived ! Try again `;
    }
    
    const result = targetfind(myarr,4);
    console.log(result);
    
    
    // Arrow Functions
    
    const tabarr = [1,2,3,4,5,6,7,8,9,10];
    const table  = (num)=>{
        for(let i = 0; i < tabarr.length; i++){
            console.log(`${num} X ${tabarr[i]} = ${num*tabarr[i]} `);
        }
    }
    
    table(3);
    
    // callback function 
    
    // function jaiho(){
    //     console.log("Jaiho");
    // }

    
    // function jaihoCall(callback){
    //     callback();
    //     callback();
    //     callback();
    //     callback();
    // }
    
    // jaihoCall(jaiho);
    
    
    
    
    
    
    






