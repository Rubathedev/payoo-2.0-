document.getElementById('add-money')
   .addEventListener('click', function(event) {
       event.preventDefault(); // ✅ Fix: Properly prevent form submission

       const amount = getInputValueById ("amount"); // ✅ Fix: Trim spaces
      

       const pin = getInputValueById("Acount-pin"); // ✅ Fix: Trim spaces
       

       //const mainBalance = document.getElementById('main-balance').innerText;
       //const convertBalance = parseFloat(mainBalance); 

       //console.log("Entered PIN:", converPin);// // Debugging log
       const account = document.getElementById("Acount-Number").value;
       console.log(account);
       const mainBalance = getInnerTextById("main-balance");
       console.log(mainBalance);
      if(account.length === 11){
        if(pin===1234){
            const sum = mainBalance + amount;
            // document.getElementById("main-balance") = sum;
            // console.log(sum);
          setInnerTextByIDandValue("main-balance",sum);
          console.log("main-balance",sum);
        }
        else{
            alert("your pin is wrong,Try again ");
             console.log("pin thik nai");
        }
      }
   });
