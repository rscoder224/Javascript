// extending


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

class dog extends animal{

 
   }
   
   
   
 
 let ans2 = new dog("koyla", "biscuit");     
   console.log(ans2);

console.log(ans);
console.log(ans.about());

console.log(ans2.about());




