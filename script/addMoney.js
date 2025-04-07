document.getElementById('add-money')
   .addEventListener('click', function(event) {
       event.preventDefault(); 

       const amount = getInputValueById ("amount"); 
    

       const pin = getInputValueById("Acount-pin"); 
       const selectedBank =  document.getElementById("select").value;
       console.log(selectedBank);
      
       const account = document.getElementById("Acount-Number").value;
       console.log(account);
       const mainBalance = getInnerTextById("main-balance");
      //  console.log(mainBalance);
      if(amount<0) {
         alert("invalid amount");
         return;
      }
      if(account.length === 11){
        if(pin===1234){
            const sum = mainBalance + amount;
            // document.getElementById("main-balance") = sum;
            // console.log(sum);
          setInnerTextByIDandValue("main-balance",sum);
          const container = document.getElementById("transection-container");
   
        const div = document.createElement("div");
        div.classList.add("bg-red-500");
        div.innerHTML = `
               <h1>Added money</h1>
       <h3>${amount}</h3>
       <h3>${selectedBank}</h3>
       <p>Account Number : ${account}</p>
        `
        container.appendChild(div);
        }
        else{
            alert("your pin is wrong,Try again ");
             console.log("pin thik nai");
        }
      }
   });
