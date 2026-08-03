 let totalAMount = 5000;

 let input = document.getElementById('input');
 let output = document.getElementById('output');

 function deposite(){
    let inputAmount = parseFloat(input.value);
   if(input.value === ""){
    output.innerHTML = "<h3>Please Enter your amount </h3>";
    return;
   } 
   totalAMount = totalAMount + inputAmount;
     output.innerHTML =
  "<h3>Deposit Amount: " + inputAmount + "</h3>" +
   "<h3> Total Amount: " + totalAMount + "</h3>";
 }

 function balance(){
     output.innerHTML = 
    "<h3>Current Balance:" + totalAMount + "</h3>"
 }
 function withdraw(){
    let inputAmount = parseFloat(input.value);
     if(inputAmount === ""){
     output.innerHTML = "<h3>Please Enter your amount </h3>";
     return;
     }
     if(inputAmount > totalAMount){
        output.innerHTML = "<h3>Insufficient balance! </h3>";
        return;

    }
    if(input.value === ""){
    output.innerHTML = "<h3>Please Enter your amount </h3>";
    return; 
    }
    if(inputAmount <= totalAMount){
         totalAMount = totalAMount - inputAmount;
   }
       
      output.innerHTML =
  "<h3>Withdraw  Amount: " + inputAmount + "</h3>" +
   "<h3>Current Balance: " + totalAMount + "</h3>";
    
 }
  
 function clearData(){
    input.value = "";
    output.innerHTML =
    "<h3>Total Amount: " + totalAMount + "</h3>";
 }

   