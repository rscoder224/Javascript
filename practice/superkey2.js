

class animal {
    constructor(name,eat){
        this.name = name;
        this.eat = eat;
    }
    
    eat(){
        return `I am a ${this.name} and I love to eat ${eat}`;
    }
}


class buffalo extends animal {
    constructor(name,eat,speed){
        super(name,eat);
        this.speed = speed;
    }
    
    run(){
        return `hey I am a Buffalo and i can run with a speed of ${this.speed} kmph`;
    }
    
}

const ans = new buffalo("Gulabo","Grass",22);


console.log(ans.run());



