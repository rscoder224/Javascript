
// sort Method in javaScript

// higher to lower decending order
// lower to higher ascending order
//  sort apply short on all elements as  string sorting 

const numbers = [5,9,1200,400,3000];

const sorted = numbers.sort((a,b)=> {return a-b});

console.log(sorted);



const userCart = [{productId:23635,productName:"Iphone", price:60000},
{productId:124275,productName:"Mac",price:90000}];

// performing high to low operation using sorting in JavaScript

const highTolow = userCart.sort((a,b)=>{
    return b.price - a.price
});

console.log(highTolow);

// performing low to high operation using sorting in javaScript

const lowTohigh = userCart.sort((a,b)=>{
    return a["price"] - b["price"];
})


console.log(lowTohigh);











