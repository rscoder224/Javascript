// CallBack Functions in JavaScript

const myName  = () =>{
    console.log("inside myName");
}

const myName2 = (callback)=> {
    callback();
    callback();
    callback();
    callback();
    callback();
    
}

myName2(myName);



