
function createUser(firstName,lastname,email,age,address){
        this.firstName = firstName;
        this.lastname = lastname;
        this.email =  email;
        this.age =    age;
        this.address = address;
}



createUser.prototype.about = function(){
    return `Hello ${this.firstName} your age is ${this.age}`
}
const user1 = new  createUser('shaurya','Tiwari','Shaurya44@gmail.com',19,'adarsh vihar colony buddheswar Lucknow');

console.log(user1.about());
console.log(user1);

