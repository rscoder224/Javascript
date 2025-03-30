// objects inside arrays
// Very usful for real world projects

const users = [{userId : 1222, userName : "Shaurya", gender : "Male"},{userId :1223, userName : "Divanshu", gender: "Male"}];

console.log(users[0]);


for(let user of users){
    console.log(user["userName"]);
};

for(let people of users){
    console.log(people.gender);
};

