// call, apply and bind


// call and apply are used to set this value an method or calling a function
   function about(hobby,favMusician){
        console.log(`hello my name is ${this.firstName}, and I am ${this.age} years old my hobby is ${hobby} and my fav musician is ${favMusician}`);
        
    }
const user1 = {
    firstName : 'shaurya',
    age : 18
}




const user2 = {
    firstName : 'shaurya',
    age : 18}
    

const user3 = {
    firstName : 'Uttam',
    age : 21}

const user4 = {
    firstName : 'Jagdeesh',
    age : 24}
    
    
about.call(user2,'playing guitar','Tansen');

about.call();

// apply and call works as same in apply we collect function parameter using array



about.apply(user3,['tabla','naresh']);



// bind
// work same as call but it returns value as function

const detailuser4 = about.bind(user4,'guitar','mozart');

detailuser4();


