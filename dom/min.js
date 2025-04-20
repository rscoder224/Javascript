
setInterval(()=>{


    const cloc = document.querySelector('.clock');
    const timeDate = new Date();
    const option = {
      timeZone :'Asia/Kolkata',
      hour : 2-digit,
      minute : 2-digit,
      second: 2-digit
    }
    
    cloc.textContent = timeDate.toLocateTimeString('en-US', option)
      
    },1000)
    
    
