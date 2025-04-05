

const personInfo = {
    about : function (){
        return `I am ${this.firstName} and my age is ${this.age}` ;
    }
    
}




const collInfo = function(firstName,lastName,age){
    const user = Object.create(personInfo);
     user.firstName = firstName;
     user.lastName  =  lastName;
     user.age       =   age;
     return user;
}


const user1 = collInfo('Shaurya','tiwari',21);

console.log(user1.about());
