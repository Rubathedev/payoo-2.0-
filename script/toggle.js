
document.getElementById('cashout').style.display ="none";
document.getElementById('transaction').style.display = "none";
document.getElementById('add-money-box')
   .addEventListener('click',function(){
   //  document.getElementById('cashout').style.display ="none";
   //  document.getElementById('addmoney').style.display ="block";
   handleToggle("addmoney","block")
   handleToggle("cashout","none")
   handleToggle("transaction","none")

   }) 

   
document.getElementById('Cashout-box')
    .addEventListener('click',function(){
//     document.getElementById('cashout').style.display ="block";
//     document.getElementById('addmoney').style.display ="none";
handleToggle("cashout","block")
handleToggle("addmoney","none")
handleToggle("transaction","none");

   }) 

