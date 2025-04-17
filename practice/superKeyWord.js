
class Animal {
    constructor(name,age){
        this.name = name;
        this.age  = age;
    }
    
    about(){
        return `Hello I am  ${this.name} and my age is ${this.age}`;
    }
    
}

class dog extends Animal {
   constructor(name,age,speed){
       super(name,age);
       this.speed = speed;
   }
   run(){
     return `${this.name} runnaing at ${this.speed} kmph`;
       
   }
}
const ans = new dog("Tommy",22,43);

console.log(ans.run())
ans.run();
