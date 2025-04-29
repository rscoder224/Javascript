


const objmeth = {
    about : function(hobby,dish){
        return `hello bro my name is ${this.name} and I am ${this.age} years old my hobbie is ${hobby} and fav dish is ${dish}`;
    },
    
email : function (){
    return `${this.name}@textfolio.com`;
}

}



const userDetails1 = {
    name: "Shaurya",
    age: 22,
    about : "Hello bro I am fine now"
}



const userDetails2 = {
    name: "Dibbu",
    age: 19,
    about : "Hello bro I am fine now"
}



const userDetails3 = {
    name: "suresh",
    age: 30,
    about : "Hello bro I am fine now"
}


console.log(objmeth.about.call(userDetails1,"Guitar","Gobhi"));

console.log(objmeth.about.apply(userDetails2,["ClapBox","aloo"]));
