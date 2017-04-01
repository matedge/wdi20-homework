// MTA Lab
//
// Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


// Arrays
var lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
var lineL = ['8th', '6th', 'Union Square', '3rd', '1st']
var line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

// // Index
// // line.indexOf(stop)
//
// // Number of total stops to travel within a line
// var stopTotal = function (startStop, endStop, line) {
//   var startStopIndex = line.indexOf(startStop);
//   var endStopIndex = line.indexOf(endStop);
//   return Math.abs(startStopIndex - endStopIndex);
// };
//
// console.log(stopTotal('8th', '1st', lineL));
//
// // Stops to travel within a line
// var stopTravel = function (startStop, endStop, line) {
//   var i = line.indexOf(startStop);
//   var j = line.indexOf(endStop);
//   if (i < j) {
//     return line.slice(i+1,j+1).join(', '); // need to use an if statement to make it works when travelling backwards.
//   }
//     else if (i > j) {
//       line = line.reverse(line);
//       return line.slice(j+1,i+1).join(', ');
//   }
// };
//
// console.log(stopTravel('6th', '1st', lineL));
// console.log(stopTravel('1st', '8th', lineL));

// Line name
var lineName = function (line) {
  if (line === lineN) {
    return 'N line';
  } else if (line === lineL) {
    return 'L line';
  } else if (line === line6) {
    return '6 line';
  }
}; // maybe easier if making the array an object.

// // planTrip within a line
// var planTrip = function (startStop, endStop, line) {
//   return 'You must travel through the following stops on the ' + lineName(line) + ': ' + stopTravel(startStop, endStop, line) + '. ' + stopTotal(startStop, endStop, line) + ' stops in total.';
// };
//
// console.log(planTrip('Times Square', '8th', lineN));
// console.log(planTrip('8th', 'Times Square', lineN));

////////////////////////////////////////////////////////////////////////////////
// Let's try to create a planTrip function for travelling BETWEEN LINES

// Stops to travel between lines
// startStop to Union Square
var stopTravelPlus = function (startStop, startLine, endStop, endLine) {
  if (startLine === endLine) { // means travelling on the same line without switching
    // var line = startLine;
    var i = startLine.indexOf(startStop); // assign the index of the starting stop to a variable i
    var j = startLine.indexOf(endStop); // assign the index of the ending stop to j
    if (i < j) { // means going forward
      return startLine.slice(i+1,j+1).join(', '); // slice method to show the stops it will pass through
    }
    else if (i > j) { // means going backward
      var startLine = startLine.reverse(startLine); // reverse method to reverse the array
      var i = startLine.indexOf(startStop); // assign index again coz the reverse method would mess up the index
      var j = startLine.indexOf(endStop);
      return startLine.slice(i+1,j+1).join(', '); // slice method to show the stops it passes through
    }
  }
  else if (startLine !== endLine) { // means have to switch lines
    var i = startLine.indexOf(startStop); // assigning index again
    var j = startLine.indexOf('Union Square');
    if (i < j) { // forward
      return startLine.slice(i+1,j+1).join(', '); // stops to travel in the 1st lane
    }
    else if (i > j) { // backward
      var startLine = startLine.reverse(startLine); // reverse
      var i = startLine.indexOf(startStop); // assign index again
      var j = startLine.indexOf('Union Square');
      return startLine.slice(i+1,j+1).join(', '); // stops to travel in the first lane
    }
  }
};

// Union Square to endStop
var stopTravelPlus2 = function (endStop, endLine) { // stops to travel in the 2nd lane
  var k = endLine.indexOf('Union Square');
  var l = endLine.indexOf(endStop);
  if (k < l) {
    return endLine.slice(k+1,l+1).join(', ');
  }
  else if (k > l) {
    var endLine = endLine.reverse(endLine);
    var k = endLine.indexOf('Union Square');
    var l = endLine.indexOf(endStop);
    return endLine.slice(k+1,l+1).join(', ');
  }
}

// First line test
console.log('**** FIRST LINE TEST ****');

console.log('**** From Times Square to 8th (line N forward) ****');
console.log('**** Expecting 34th, ... ..., 8th ****');
console.log(stopTravelPlus('Times Square', lineN, '8th', lineN));

console.log('**** From 6th to 1st (line L forward) ****');
console.log('**** Expecting Union Square, ... ..., 1st ****');
console.log(stopTravelPlus('6th', lineL, '1st', lineL));

console.log('**** From Times Square to 8th (line N to line L, forward) ****');
console.log('**** Expecting 34th, ... ..., Union Square ****');
console.log(stopTravelPlus('Times Square', lineN, '8th', lineL));


console.log('__________________________________________________________________________________________________________________________');
// Second line test
console.log('**** SECOND LINE TEST ****');

console.log('**** From Union Square to Grand Central (line 6, backward) ****');
console.log('**** Expecting 23rd, ... ..., Grand Central ****');
console.log(stopTravelPlus2('Grand Central', line6));

console.log('**** From Union Square to Times Square (line N, backward) ****');
console.log('**** Expecting 23rd, ... ..., Times Square ****');
console.log(stopTravelPlus2('Times Square', lineN));

console.log('**** From Union Square to 8th (line L, backward) ****');
console.log('**** Expecting 6th, 8th ****');
console.log(stopTravelPlus2('8th', lineL));


// Number of total stops to travel between lines
var stopTotalPlus = function (startStop, startLine, endStop, endLine) {
  if (startLine === endLine) {
    // var line = startLine;
    var a = startLine.indexOf(startStop);
    var b = startLine.indexOf(endStop);
    return Math.abs(a - b);
  }
  else if (startLine !== endLine) {
    var a = startLine.indexOf(startStop);
    var b = startLine.indexOf('Union Square');
    var c = endLine.indexOf('Union Square');
    var d = endLine.indexOf(endStop);
    return Math.abs(a - b) + Math.abs(c - d);
  }
};

console.log('__________________________________________________________________________________________________________________________');
console.log('**** TOTAL STOPS TEST ****');
console.log(stopTotalPlus('8th', lineL, '1st', lineL));
console.log(stopTotalPlus('23rd', lineN, '23rd', line6));


// planTripPlus between lines
var planTripPlus = function (startStop, startLine, endStop, endLine) {
  if (startLine === endLine) {
    return 'You must travel through the following stops on the ' + lineName(startLine) + ': ' + stopTravelPlus(startStop, startLine, endStop, endLine) + '. ' + stopTotalPlus(startStop, startLine, endStop, endLine) + ' stops in total.';
  }
  else if (startLine !== endLine) {
    return 'You must travel through the following stops on the ' + lineName(startLine) + ': ' + stopTravelPlus(startStop, startLine, endStop, endLine) + '. Change at Union Square. Your journey continues through the following stops on the ' + lineName(endLine) + ': ' + stopTravelPlus2(endStop, endLine) + '. ' + stopTotalPlus(startStop, startLine, endStop, endLine) + ' stops in total.';
  }
}
console.log('__________________________________________________________________________________________________________________________');
console.log('**** SAME LINE TEST ****');

console.log('**** From Union Square to Grand Central (line 6, backward) ****');
console.log('**** Expecting 23rd, ... ..., Grand Central ****');
console.log(planTripPlus('Union Square', line6, 'Grand Central', line6));

console.log('**** From 6th to 1st (line L forward) ****');
console.log('**** Expecting Union Square, ... ..., 1st ****');
console.log(planTripPlus('6th', lineL, '1st', lineL));

console.log('__________________________________________________________________________________________________________________________');
console.log('**** DIFFERENT LINES TEST ****');

console.log('**** From Times Square to 8th (line N to line L, forward then backward) ****');
console.log('**** Expecting 34th, ... ..., Union Square, then 6th, 8th ****');
console.log(planTripPlus('Times Square', lineN, '8th', lineL));

console.log('**** From 28th to 28th (line N to line 6, forward then backward) ****');
console.log('**** Expecting 23rd, Union Square, then 23rd, 28th ****');
console.log(planTripPlus('28th', lineN, '28th', line6));
