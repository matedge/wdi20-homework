var sieve = {

  numbers:[],
  counter: 0,

  calculatePrimes:function (max) {

    for (var i =0 ; i<max; i++){
      this.numbers[i]
    }

    for(var i = 2; i < this.numbers.length; i++){
      var currentNumber = i;

      for(var j = currentNumber +1 ; j<this.numbers.length; j++){

        this.counter++;

        if ((this.numbers[j]=== false) && (j % currentNumber === 0)){
          this.numbers[j] = false;
        }
      }

       for (var i = 0; i < this.numbers.length; i++) {
         if(this.numbers[i] === true) {
           console.log(i);
         }
       }
    }
  }

};
sieve.calculatePrimes(10);



// # The Sieve of Eratosthenes
//
// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.
//
// Create your range, starting at two and ending at the given limit.
//
// The algorithm consists of repeating the following over and over:
//
// - take the next available unmarked number in your list (it is prime)
// - remove all the multiples of that number (they are not prime)
//
// Repeat until you don't have any possible primes left in your range.
//
// When the algorithm terminates, all the numbers in the list that have not been removed are prime.
//
// Do this in Javascript!
