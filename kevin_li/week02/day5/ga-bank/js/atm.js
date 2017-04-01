//  Next challenge would be the Separation of Concerns

$(document).ready(function(){

  var checkBalance = 0;
  var saveBalance = 0;

//  Checking Account

  $('#checking-deposit').on('click', function () {
    checkBalance += parseInt($('#checking-amount').val());
    $("#checking-balance").text('$' + checkBalance);
    checkColor();
  })

  $('#checking-withdraw').on('click', function () {

    var totalBalance = checkBalance + saveBalance;
    var requestedWithdrawal = parseInt( $('#checking-amount').val() );

    console.log('in checkWithdraw()');
    console.log('totalBalance:', totalBalance);
    console.log('checkBalance:', checkBalance);
    console.log('saveBalance:', saveBalance);
    console.log('requestedWithdrawal:', requestedWithdrawal);
    // debugger;

    // if enough money in checking
    //   withdraw from checking
    // else if not enough in checking BUT enough in checking+savings
    //   withdraw everything from checking, and then widthdraw remaining amount from savings
    // else if STILL not enough in both combined
    //   show error message 'Insufficient funds'

    if (requestedWithdrawal <= checkBalance) {
      checkBalance -= requestedWithdrawal;
    } else if (requestedWithdrawal <= totalBalance) {
      checkBalance = 0;
      saveBalance = totalBalance - requestedWithdrawal;
      $("#savings-balance").text('$' + saveBalance); // update the savings balance on the page
    } else {
      alert ('Insufficient fund.');
    }

    $("#checking-balance").text('$' + checkBalance); // update the checking balance on the page

    checkColor();
    saveColor();
  })

  var checkColor = function () {
    if (checkBalance === 0) {
      $('#checking-balance').css('backgroundColor', 'red')
    } else {
      $('#checking-balance').css('backgroundColor', '#E3E3E3')
    }
  }

  checkColor();


//  Savings Account

  $('#savings-deposit').on('click', function () {
    saveBalance += parseInt($('#savings-amount').val());
    $("#savings-balance").text('$' + saveBalance);
    saveColor();
  })

  $('#savings-withdraw').on('click', function () {
    if (parseInt($('#savings-amount').val()) > saveBalance) {
      alert('Insufficient fund.');
    } else {
      saveBalance -= parseInt($('#savings-amount').val());
      $("#savings-balance").text('$' + saveBalance);
    }
    saveColor();
  })

  var saveColor = function () {
    if (saveBalance === 0) {
      $('#savings-balance').css('backgroundColor', 'red')
    } else {
      $('#savings-balance').css('backgroundColor', '#E3E3E3')
    }
  }

  saveColor();

});
