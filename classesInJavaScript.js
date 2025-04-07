// Classes in javaScript
// Class keyword
// Classes Are fake

class createUser{
    constructor(firstName,lastName,age,email,phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.phone = phone;
    }
    about(){
        return `hey ${this.firstName} you are ${this.age}`;
    }
    
    
}

const user1 = new createUser("Shaurya","Tiwari",12,'ltsmartofficial@gmail.com',8939404052);


console.log(user1.about());

