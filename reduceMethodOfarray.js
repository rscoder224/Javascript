// reduce method in javaScript

const numbers = [1,2,3,4,5,6];

// aim : sum of all numbers in array


const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
});

console.log(sum);

// accumulator  currentValue      return 
// 1             2                  3
// 3             3                  6
// 6             4                  10
// 10            5                  15
// 15            6                  21



const userCart = [{productId:23635,productName:"Iphone", price:60000},
{productId:124275,productName:"Mac",price:90000}];





const user_total = userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.price;
},0);

console.log(user_total);





