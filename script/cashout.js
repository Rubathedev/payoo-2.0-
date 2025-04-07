document.getElementById("cashout-btn").
addEventListener("click",function(event){
    event.preventDefault();  
    const accountNumber = document.getElementById("acount-number").value;
    // console.log(accountNumber);
    const amount = getInputValueById("Amount");
    const pin  = getInputValueById("acount-pin");
    const balance = getInnerTextById("main-balance");

//    console.log(balance);
    // console.log(amount);
    if(amount>balance){
        alert("invalid amount");
        return;
    }
    if(accountNumber.length === 11){
        
     if(pin === 1234){
     const sum  = balance - amount;
    //  console.log(sum);
    setInnerTextByIDandValue("main-balance",sum);
    const container = document.getElementById("transection-container");
    const p = document.createElement (p);
    p.innerText = `
    
    cashout ${amount} from this ${accountNumber} account 


    `
    container.appendChild(p);
     
     }
     else{
        alert("you pin number is not valid");
     }
    }
    else{
        alert("account number is not valid");
        console.log(accountNumber.length);
    }
   
})