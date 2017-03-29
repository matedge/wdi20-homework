$(document).ready(function(){

  var bank = {
    totalBalance: checking.balance + savings.balance,

    checking: {
      balance: 0.00,

      deposit: function (amount) {

        this.balance += amount;
        return this.balance;
      },

      withdraw: function (amount) {

        // debugger;
        bank.totalBalance = this.balance + bank.savings.balance;

        if (amount <= this.balance) {

          this.balance -= amount;

        } else if (amount <= bank.totalBalance) {

          var remainder = amount - this.balance;
          this.balance = 0.00;
          bank.savings.balance -= remainder;

        } else {

          alert("Insufficient funds");
        }
          return this.balance;
      }
    },

    savings: {
      balance: 0.00,

      deposit: function (amount) {

        this.balance += amount;

        return this.balance;
      },

      withdraw: function (amount) {
        if(amount > this.balance) {

          alert("Insufficient funds");

        } else {

          this.balance -= amount;
        }
        return this.balance;
      }
    }

  };

  var bankInterface = {

    checkingDisplayUpdate: function (){
      if (bank.checking.balance === 0) {
        $("#checking-balance").html("$" + bank.checking.balance);
        this.checkingZeroAlert();
        $("#checking-amount").val("");

      } else {
        $("#checking-balance").html("$" + bank.checking.balance);
        this.checkingDisplayReset();
        $("#checking-amount").val("");

      }

    },

    savingsDisplayUpdate: function (){
      if (bank.savings.balance === 0) {
        $("#savings-balance").html("$" + bank.savings.balance);
        this.savingsZeroAlert();
        $("#savings-amount").val("");

      } else {
        $("#savings-balance").html("$" + bank.savings.balance);
        this.savingsDisplayReset();
        $("#savings-amount").val("");

      }

    },

    checkingZeroAlert: function (){

      $("#checking-balance").css("background", "red")
    },

    checkingDisplayReset: function (){

      $("#checking-balance").css("background", "#E3E3E3")
    },

    savingsZeroAlert: function (){

      $("#savings-balance").css("background", "red");
    // },
    // inputCheck: function (element) {
    //   var input = parseFloat($(element).val());
    //   console.log(input);
    //   return input;
    },

    savingsDisplayReset: function (){

      $("#savings-balance").css("background", "#E3E3E3")
    }

  };

//checking buttons
  $(document).on("click", "#checking-deposit", function(){

    // bankInterface.inputCheck("#checking-amount");
    var input = parseFloat($("#checking-amount").val());
    var newBalance = bank.checking.deposit(input);

    bankInterface.checkingDisplayUpdate();
  });

  $(document).on("click", "#checking-withdraw", function(){

    var input = parseFloat($("#checking-amount").val());
    var newBalance = bank.checking.withdraw(input);

    bankInterface.checkingDisplayUpdate();
    bankInterface.savingsDisplayUpdate();
  });

  //savings buttons
  $(document).on("click", "#savings-deposit", function(){

    var input = parseFloat($("#savings-amount").val());
    var newBalance = bank.savings.deposit(input);

    bankInterface.savingsDisplayUpdate();
  });

  $(document).on("click", "#savings-withdraw", function(){

    var input = parseFloat($("#savings-amount").val());
    var newBalance = bank.savings.withdraw(input);

    bankInterface.savingsDisplayUpdate();
  });

});
