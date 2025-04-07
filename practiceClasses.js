// Practice of Creating a class in JavaScript


class animal{
    constructor(name,eat){
        this.name = name;
        this.eat  = eat;
        
    }
    
    about(){
        return `animal name is ${this.name} and animal eat ${this.eat}`;
    }
    
}


const ans = new animal("elephant","sugarCane");


console.log(ans);
console.log(ans.about());

