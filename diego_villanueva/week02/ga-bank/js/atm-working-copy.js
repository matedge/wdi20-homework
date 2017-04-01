$(document).ready(function(){

//// it works ///

  var checkingBalance = 0;
  var savingBalance = 0;
  var $checkingScreen = $('#checking-balance');
  var $savingScreen = $('#savings-balance');

// test//
  var checkingBalance = 10;
  var savingBalance = 30;


  updateDisplay = function (){
    $checkingScreen.html('$' + checkingBalance.toFixed(2));
    $savingScreen.html('$' + savingBalance.toFixed(2))
  };

//// functions to Deposit and withdraw //

  depositChecking = function (){
      var $amount = parseFloat($('#checking-amount').val());
      checkingBalance += $amount;
      $('#checking-amount').val(null);
      updateDisplay();
  };

  depositSaving = function (){
      var $amount = parseFloat($('#savings-amount').val  ());
      savingBalance += $amount;
      $('#savings-amount').val(null);
      updateDisplay();
  };

  withdrawChecking = function (){
    var $amount = parseFloat($('#checking-amount').val());
    if (checkingBalance>= $amount){
        checkingBalance -= $amount;
        $('#checking-amount').val(null);
        updateDisplay();
    } else if (( checkingBalance + savingBalance ) >= $amount) {  //can get $ from savings
      $amount -= checkingBalance;
      checkingBalance = 0;
      savingBalance -= $amount;
      $('#checking-amount').val(null);
      updateDisplay();
    } else {
      alert ('Really?   You don\'t have enough money')
      $('#checking-amount').val(null);
      updateDisplay();
    }
  };

  withdrawSaving = function (){
    var $amount = parseFloat($('#savings-amount').val());
    if (savingBalance>= $amount){
        savingBalance -= $amount;
        $('#savings-amount').val(null);
        updateDisplay();
    } else {
      alert ('Really?   You don\'t have enough money')
      $('#savings-amount').val(null);
      updateDisplay();
    }
  };

// buttons //

  $("#checking-deposit").on("click", depositChecking);
  $("#savings-deposit").on("click", depositSaving);
  $("#checking-withdraw").on("click", withdrawChecking);
  $("#savings-withdraw").on("click", withdrawSaving);






});   // closing main function
