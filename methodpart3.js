// proto , prototype , class

// function
// 1. we are going to create an object 
// 2. add key value pair in it
// 3. object ko return Karega

  const userMethod = { about : function() {
        return `${this.firstName} is ${this.age} `
    },
    
    is18 : function() {
        return this.age >= 18;
    }
  }
    

function createUser(firstName,lastname,email,age,address){
const user = {};
        user.firstName = firstName;
        user.lastname = lastname;
        user.email =  email;
        user.age =    age;
        user.address = address;
        user.about = userMethod.about;
        user.is18  = userMethod.is18;
    return user;
}

const user1 = createUser('shaurya','Tiwari','Shaurya44@gmail.com',19,'adarsh vihar colony buddheswar Lucknow');

console.log(user1);



console.log(user1);
