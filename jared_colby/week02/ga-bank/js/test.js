$(document).ready(function(){

  var bank = {
    checkingBalance:0,
    savingsBalance:0
  }

   var checkingDeposit = function (){
     var amount = $("#checking-amount").val()

     bank.checkingBalance += parseInt(amount)

     $("#checking-balance").html("$" + bank.checkingBalance);
   };

   var checkingWithdraw = function(){
     var amount = parseInt($("#checking-amount").val())
     if (amount > bank.checkingBalance) {
       // they are taking out too much

     }else{
       // we can let them proceed
     }

     bank.checkingBalance -= amount




      $("#checking-balance").html("$" + bank.checkingBalance);
   };

$("#checking-deposit").on ("click", checkingDeposit);
$("#checking-withdraw").on ("click", checkingWithdraw);


    var savingsDeposit = function (){
      var amount = $("#savings-amount").val()

      bank.savingsBalance += parseInt(amount)

      $("#savings-balance").html("$" + bank.savingsBalance);
    };

    var savingsWithdraw = function(){
      var amount = $("#savings-amount").val()
      bank.savingsBalance -= parseInt(amount)

       $("#savings-balance").html("$" + bank.savingsBalance);
    }

    $("#savings-deposit").on ("click", savingsDeposit);
    $("#savings-withdraw").on ("click", savingsWithdraw);


});
