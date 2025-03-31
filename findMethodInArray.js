// find method of array in JavaScript
// const myArray = ["ramu","uttam","kumar","sujan","naresh","bhola"];

const users = [{userId:1 , userName: "Shaurya"},
{userId:2 , userName: "Kunal"},
{userId:3 , userName: "rajesh"},
{userId:4 , userName: "abhay"},
{userId:5 , userName:"nitesh"},
{userId:6 , userName : "kallu"},
];

// finding user using find method

const myUser = users.find((user)=>{
    return user.userId === 2;
});


console.log(myUser);




