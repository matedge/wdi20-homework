$(document).ready(function(){

  var bank = {
    checkingBalance:0,
    savingsBalance:0
  }

  // this function updates the screen
  var drawScreen = function(){
    $("#savings-balance").html("$" + bank.savingsBalance);
    $("#checking-balance").html("$" + bank.checkingBalance);
    //change backrounds of divs to red if their balances are zero
    if (bank.checkingBalance > 0){
      $("#checking-balance").css({"background-color": "#E3E3E3"})
    }else{
      $("#checking-balance").css({"background-color": "red"})
    }
    if (bank.savingsBalance > 0){
      $("#savings-balance").css({"background-color": "#E3E3E3"})
    }else {
      $("#savings-balance").css({"background-color": "red"})
    }
  }

   var checkingDeposit = function (){
     var amount = $("#checking-amount").val()

     bank.checkingBalance += parseInt(amount)

     drawScreen();
   };

   var checkingWithdraw = function(){
     var amount = parseInt($("#checking-amount").val())
     if (amount > bank.checkingBalance + bank.savingsBalance){
       // they are taking out more than the combined balance
       alert("insufficient funds")
       return //will return undefined and stop the function
     }
     // we have enough money to proceed
     if (amount > bank.checkingBalance){
       //need to draw from savingsBalance
       var savingsWithdrawl = amount - bank.checkingBalance;
       bank.savingsBalance -= savingsWithdrawl;
       bank.checkingBalance = 0;
     }else{
       //take from checkingBalance
       bank.checkingBalance -= amount
     }
     drawScreen();
   };

$("#checking-deposit").on ("click", checkingDeposit);
$("#checking-withdraw").on ("click", checkingWithdraw);


    var savingsDeposit = function (){
      var amount = $("#savings-amount").val()

      bank.savingsBalance += parseInt(amount)

      drawScreen();
    };

    var savingsWithdraw = function(){
      var amount = $("#savings-amount").val()
      bank.savingsBalance -= parseInt(amount)
      //alert user that account has insufficient funds
      if (amount > bank.savingsBalance){
        alert("insufficient funds")
        return

      }

      drawScreen();
    }

    $("#savings-deposit").on ("click", savingsDeposit);
    $("#savings-withdraw").on ("click", savingsWithdraw);


});
