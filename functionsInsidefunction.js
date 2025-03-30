// Functions inside functions 

const app = ()=>{
    const hello = () => console.log("hello I am inside function");
    console.log("Inside app");
    
    // sum of two Numbers
    const sum = (a,b)=>{
        console.log(a+b);
    }

// find odd even function

const oddEven = (k)=>{
    if(k%2 === 0){
        console.log("Even")
    } else{
        console.log("odd");
    }
}

hello();   
oddEven(23);
sum(12,34);

};

app();

