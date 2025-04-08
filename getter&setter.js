// getters and setters in  javaScript

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName   = lastName;
        this.age       = age;
        
    }
    // get keyword used for
    get fullName() {
        return `hello bro Fullname is ${this.firstName} ${this.lastName}`;}
        
        
        set fullName (fullName){
            const [firstName , lastName] = fullName.split(" ");
            this.firstName = firstName;
            this.lastName = lastName;
        }
}



const person1 = new Person("Shaurya","Tiwari",22);

console.log(person1.fullName);

