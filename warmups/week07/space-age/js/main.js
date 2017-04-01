
// Let's use a constructor to allow us to create an object with certain properties an even methods!
// Javascript (until the latest ES6) doesn't have a way to define classes, so this is the nearest
// thing. It lets us initialise our object and define its properties and methods, all at once.
// Note the uppercase start of the function name.
// Also note that it is *essential* to use the 'new' keyword below when calling our constructor,
// in order for it to create a new object as expected.

var SpaceAge =  function( seconds ){

  this.seconds = seconds;

  // Work out the number of years on earth, as a reference point for calculations
  this.yearsOnEarth = seconds / 31557600;

  // We'll use a object to store our orbital period conversions, with planet names as keys
  this.earthToOtherPlanets = {
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
  };

  this.yearsOnAllPlanets = function () {
    // Iterate over our table of planets, and use the conversion factor to work out
    // the age on that planet
    for( var planet in this.earthToOtherPlanets ){
      console.log( planet + " years: " + this.yearsOnEarth / this.earthToOtherPlanets[ planet ] );
    }
  };

  this.yearsOnPlanet = function ( planet ) {
    // calculate the age on a single requested planet, by name
    var planetRatio = this.earthToOtherPlanets[ planet ];
    return this.yearsOnEarth / planetRatio;
  };

};

// This is how we invoke our constructor. The 'new' keyword is the essential magic here.
var age = new SpaceAge( 1000000000 );

age.yearsOnAllPlanets();

var p = "Saturn";
console.log("Years on " + p + ": " + age.yearsOnPlanet( p ));
