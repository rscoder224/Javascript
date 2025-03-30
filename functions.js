
// functions in javaScript

// function declartion
function hello(){
    console.log("Happy Birthday Bro");
};

// function expression
// sum of two numbers

const sum = function(a,b){
    console.log(a+b);
}


// arrow Function
// finding something from tagerted array

const arr1 = [2,3,5,6,66,37];

const dectecter = (array,target)=>{
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
        return "targed Achived" }
    }
    return "target not finded";
};


hello();

sum(2,3);


console.log(dectecter(arr1,66));

