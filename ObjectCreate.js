// __proto__ and [[prototype]]

// USE of Object.create(obj1);

const obj = {
    key1: 'value1',
    key2 : 'value2'
}

const obj2 = Object.create(obj);

obj2.firstName = "shaurya";

console.log(obj2.key1);



// by using Object.create(obj) obj becamed proto of obj2 ;
