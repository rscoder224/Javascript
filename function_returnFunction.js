// function returning function

function returnfun(){
    function sum(a=0,b=0){
        console.log(a+b);
    } return sum;
    
}

const ans = returnfun();

ans(2,2);

