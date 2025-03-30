// rest parameters using javaScript
// ...restparameter is passed inside function insert extra  values inside array

function abd(a,b,...c){
    console.log(`the value of a is ${a}`);
    console.log(`the value of b is ${b}`);
    console.log(`the value of c is ${c}`);
    console.log(c);
};


abd(10,12,4,3,4,54,5,6,7,8);

// sum of all numbers 

const sum = (...num)=> {
    let total = 0;
    for(let i = 0; i < num.length; i++){
        total = total + num[i];
    }
    return total;
}

let ans = sum(1,2,3);

console.log(ans);
