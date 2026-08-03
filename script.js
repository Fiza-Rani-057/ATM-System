 let totalAMount = 5000;

 let input = document.getElementById('input');
 let output = document.getElementById('output');

 function deposite(){
    let inputAmount = parseFloat(input.value);
   if(input.value === ""){
    output.innerHTML = "<h2>Please Enter your amount </h2>";
    return;
   } 
   totalAMount += inputAmount;
     output.innerHTML =
  "<h2>Deposit Amount: " + inputAmount + "</h2>" +
   "<h2> Total Amount: " + totalAMount + "</h2>";
 }

 function balance(){
     output.innerHTML = 
    "<h2>Current Balance:" + totalAMount + "</h2>"
 }
 function withdraw(){
    let inputAmount = parseFloat(input.value);
     if(inputAmount === ""){
     output.innerHTML = "<h2>Please Enter your amount </h2>";
     return;
     }
     if(inputAmount > totalAMount){
        output.innerHTML = "<h2>Insufficient balance! </h2>";
        return;

    }
    if(input.value === ""){
    output.innerHTML = "<h2>Please Enter your amount </h2>";
    return; 
    }
    if(inputAmount <= totalAMount){
         totalAMount = totalAMount - inputAmount;
   }
       
      output.innerHTML =
  "<h2>Withdraw  Amount: " + inputAmount + "</h2>" +
   "<h2>Current Balance: " + totalAMount + "</h2>";
    
 }
  
 function clearData(){
    output.innerHTML = "";
    input.value = "";
 }

   