// default Parameters 

const addTwo = (a,b = 0)=>{
console.log(a+b);
}

// sum of two Numbers

const sum = (c,d)=> {
    if(typeof d === "undefined"){
        d = 0;
    }
    
    console.log(c+d)
}


sum(10);
addTwo(13);



