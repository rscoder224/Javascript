// class keyword
// after using get in side class methods function inside class treated as property



class person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
   get fullname(){
        return `${this.firstName} ${this.lastName}`
    }
    
  set  setName(fullname){
    const[firstName, lastname]  =  fullname.split(" ");
       this.firstName = firstName;
       this.lastName  = lastName;
       
    }
    
}


const ans = new person('shaurya',"tiwari",22);


console.log(ans);
console.log(ans.fullname);





