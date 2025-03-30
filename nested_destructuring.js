// nested destructuring

const users = [{userId : 1222, userName : "Shaurya", gender : "Male"},{userId :1223, userName : "Divanshu", gender: "Male"}];

const [{userName : userName_user1},{userId: _user2}] = users;

console.log(userName_user1);
console.log(_user2);

// practicle Implimentation

let arr1 = [{userName: "Shaurya" ,password: "gdvg37dg" , mobile: 030489848   },
{userName: "Divyanshu" ,password: "ed7348tgd", mobile:9348390584   },
{userName: "Ayush" ,password: "sg3ry11" , mobile: 8928388349   }];


let[{userName:myname, password : s_pass},{password:d_pass},{mobile:a_phone}] = arr1;

console.log(myname);
console.log(d_pass);
console.log(a_phone);
console.log(s_pass);








