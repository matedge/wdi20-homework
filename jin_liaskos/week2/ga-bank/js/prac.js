$(document).ready(function() {
// var total = checkingBalance + savingsBalance;
// $var setCallback = function ()
// document
// $("#checking-deposit").on('click', addBalance);
// $("#savings-deposit").on('click', addBalance);
//
// $("#checking-withdraw").on('click', lessBalance);
// $("#savings-widthdraw").on('click', savingLessBalance);
//$('#checking-amount').val(addBalance);
//$('#savings-amount').css.("background", ""#eeeeee");
//
//var $(':input').each(function() {
//       var elem = $(this); //(this) jQuery wrapper
//       console.log(elem.val());
//   });

window.savingsBalance = 0;
window.checkBalance = 0;

var total = function( savings, check ) {
  var totalBalance = parseInt(savingsBalance + checkBalance);
  console.log( totalBalance );
}

var addBalance = function(){
  savingsBalance += deposit;
  console.log(savingsBalance);

};

var savingsDeposit = function () {

  console.log('inside savingsDeposit()');

  var amount = parseInt( $('#savings-amount').val() );

  //savingsBalance = savingsBalance + amount;
  savingsBalance += amount;

  $('#savings-balance').html("$" + savingsBalance);

/*
  1. Get deposit amount from text input field in HTML
  2. Add amount to savings balance
  3. Update the HTML to show new balance

*/


};

  //
  //
  // window.checkingWithdrawal = function(){
  //
  //   var withdraw;
  //
  //   console.log('running savingsWithdrawal() hello!');
  //
  //   if (savingsBalance < withdraw) {
  //     alert("Insufficient funds");
  //
  //   } else if(savingsBalance < withdraw){
  //     alert("Insufficient funds.");
  //   }else if (savingsBalance) {
  //   // (savingsBalance < withdraw) {
  //   } else {
  //     var transferOverdraft = (total - withdraw) - savingsBalance;
  //   }
  //
  //   // }else ( savingsBalance -= withdraw ){
  //   //   console.log(savingLessBalance);
  //   // }
  // };


   var savingsWithdrawal = function(withdraw){

    var withdrawAmount = parseInt( $('#savings-amount').val() ) ;

        if (withdrawAmount <= savingsBalance) {

          savingsBalance -= withdrawAmount;

          ($ ('#savings-balance').html("$" + savingsBalance));

        } else {

          alert("Insufficient Funds.");
        }

    // console.log('running savingsWithdrawal() hello!');

    /*
    Pseudocode:

    1. Get withdrawal amount from text input field
    2. Check they have enough money in the account, so they can make the withdrawal
      - if they have enough, subtract the withdrawal amount from the savings balance
      - if they don't have enough, show an error message "Insufficient funds"

    3. Update the GUI/HTML page to show the new savings balance (after the withdrawal)
    */


  };

// addBalance(48);
// savingsLessBalance (4);

//====
$("#checking-deposit").on("click", addBalance);

$("#savings-deposit").on("click", savingsDeposit);

// $("#checking-withdraw").on("click", lessBalance);

$("#savings-withdraw").on("click", savingsWithdrawal);

// $("#savings-widthdraw").on('click', savingLessBalance);

});  // close $(document).ready(function(){}
  // note ideally, the banking operation should separate (concern) from event handler/front end ** modular ** html+css, events, bank logic (withdraw/deposit)
