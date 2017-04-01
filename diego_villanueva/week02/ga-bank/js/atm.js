$(document).ready(function(){

//// it works ///
  // var bank = {
  //   checkingBalance: 0,
  //   savingsBalance: 0,
  //   depositChecking: function(deposit){
  //     this.checkingBalance += deposit;
  //   },
  //   despositSavings: function(){
  //
  //   }
  // }
  //
  // var checkingDepositHandler = function(){
  //   var deposit = parseInt($("input").val())
  //   bank.depositChecking(deposit);
  // }
  //
  // var savingsDepositHandler = function(){
  //
  // }
  //
  // $("#checking-btn").on("click", checkingDepositHandler)
  // $("#savings-btn").on("click", savingsDepositHandler)



  var checkingBalance = 0;
  var savingBalance = 0;
  var $checkingScreen = $('#checking-balance');
  var $savingScreen = $('#savings-balance');




  updateDisplay = function (){
    $checkingScreen.html('$' + checkingBalance.toFixed(2));
    $savingScreen.html('$' + savingBalance.toFixed(2))
    savingsColor();
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


// change colours
  var savingsColor = function (){
    if (savingBalance === 0){
      $('#savings-balance').css("background-color", "rgba(215, 15, 15, 0.76)");
    } else {
      $('#savings-balance').css("background-color", "#E3E3E3");
    }

    if (checkingBalance === 0){
      $('#checking-balance').css("background-color", "rgba(215, 15, 15, 0.76)");
    } else {
      $('#checking-balance').css("background-color", "#E3E3E3");
    }

  };



});   // closing main function
