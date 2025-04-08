

function hello(favson,musician){
    return `hey I am ${this.firstName} and I am ${this.age} years old My hobby is ${this.hobby}     ${favson} ${musician}`;
}



const obj = {
   firstName : "shaurya",
   age : 19,
   hobby : "guitar"
};


const obj2 = {
   firstName : "Divyanshu",
   age : 17,
   hobby : "Piano"
};

const obj3 = {
   firstName : "Naresh",
   age : 21,
   hobby : "Tabla"
};


const ans = hello.call(obj,"tum hi ho","arjit");

const ans2 = hello.apply(obj2,["teri deewani","Kailash"]);

const ans3 = hello.bind(obj3,"aapki ki kashish","Himesh Reshamiya");

console.log(ans3());

console.log(ans)
console.log(ans2)




