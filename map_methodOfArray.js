// map method in javaScript
// map always creates a new array

const numbers = [2,3,4,5,6,7,8,9];

const sqaure = (number)=> number*number;

const squareNumbers = numbers.map(sqaure);

console.log(squareNumbers);
console.log(numbers);

const users = [{firstName:"Shaurya",userId:12334, phone_n:943834855},
{firstName:"Bahni",userId:99023, phone_n:843843002},
{firstName:"Suresh",userId:892833, phone_n:4747392993}];

// now yo have to store firstName of users inside an array

const names = users.map((user)=> {
    return user.firstName;
});

const user_con = users.map((user)=>{
    return user.phone_n;
});

console.log(names);
console.log(user_con);

