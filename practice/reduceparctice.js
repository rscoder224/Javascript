

userCart = [
    {userproduct : "iphone" , userPrice : 60000},
    {userproduct : "mac" , userPrice : 90000},
    {userproduct : "desk" , userPrice : 40000},
    {userproduct : "recliner" , userPrice : 39000}
    ];
    
    
  const ans =   userCart.reduce((currentValue, accumulator)=>{
        return currentValue + accumulator.userPrice;
    },0);
    
    
    
    console.log(ans)
