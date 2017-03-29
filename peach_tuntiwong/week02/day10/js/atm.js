
$(document).ready(function(){

  var balance = {
    checking: 0,
    savings: 0
  };

  var isEmpty = function(acount) {
    if (balance[acount] === 0) {
      $('#' + acount + '-balance').css('background-color', 'red');
    } else {
      $('#' + acount + '-balance').css('background-color', '#E3E3E3');
    }
  }

  isEmpty('savings');
  isEmpty('checking');

  var balanceUpdate = function(amount, account) {
    balance[account] += amount;
    $("#" + account +"-balance").html('$'+balance[account]);
    isEmpty(account);
  }

  var withdraw = function(currentAcc) {
    var account = getAccountName(currentAcc);
    var withdrawAmount = parseInt($("#" + account.current + "-amount").val());
    if (balance[account.current] >= withdrawAmount) {
      balanceUpdate(-withdrawAmount, account.current);
    } else if (account.current === 'checking') {
      if ((balance[account.current] + balance[account.backup]) >= withdrawAmount) {
        balanceUpdate(-(withdrawAmount - balance[account.current]), account.backup);
        balanceUpdate(-balance[account.current], account.current);
      } else {
        alert("Insuficient fund");
      }
    } else {
      alert("Insuficient fund");
    }
  }

  var getAccountName = function(currentAcc) {
    var account = {
      current: currentAcc,
    };

    if (account.current === 'savings') {
      account.backup = 'checking';
    } else {
      account.backup = 'savings';
    }
    return account;
  }

  // Checking Deposit
  $(document).on("click", "#checking-deposit", function() {
    var account = $(this).parent().attr('id');
    var inputBoxName = "#" + account + "-amount"
    var amount = parseInt($(inputBoxName).val());
    balanceUpdate(amount, account);
  });

  // Savings Deposit
  $(document).on("click", "#savings-deposit", function() {
    var account = $(this).parent().attr('id');
    var inputBoxName = "#" + account + "-amount"
    var amount = parseInt($(inputBoxName).val());
    balanceUpdate(amount, account);
  });

  // Checking Withdraw
  $(document).on("click", "#checking-withdraw", function() {
    var currentAcc = $(this).parent().attr('id');
    withdraw(currentAcc);
  });

  // savings Withdraw
  $(document).on("click", "#savings-withdraw", function() {
    var currentAcc = $(this).parent().attr('id');
    withdraw(currentAcc);
  });


});
