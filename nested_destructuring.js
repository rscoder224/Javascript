// nested destructuring

const users = [{userId : 1222, userName : "Shaurya", gender : "Male"},{userId :1223, userName : "Divanshu", gender: "Male"}];

const [{userName : userName_user1},{userId: _user2}] = users;

console.log(userName_user1);
console.log(_user2);









