document.getElementById("cashout-btn").
addEventListener("click",function(event){
    event.preventDefault();  
    const accountNumber = document.getElementById("acount-number").value;
    // console.log(accountNumber);
    const amount = getInputValueById("Amount");
    console.log(amount);
    if(accountNumber.length === 11){
        // alert("you are good to go");
    }
    else{
        alert("account number is not valid");
        console.log(accountNumber.length);
    }
   
})