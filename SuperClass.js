// super class 


class animal {
    constructor(name,eat){
        this.name = name;
        this.eat = eat;
    }
    
    about(){
        return `Animal name is ${name} and ${name} eats ${eat}`;
    }
    
}




class dog extends animal {
    constructor(name,eat,speed){
    super(name,eat);
    this.speed = speed;
        
    }
    
    
}




const tommy = new dog("tommy","meat",45);



console.log(tommy);
