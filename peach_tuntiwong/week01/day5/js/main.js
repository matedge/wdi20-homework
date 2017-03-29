// MTA Lab

// ********* Note ************
// Subway lines only intersect at UNION SQUARE!!!


// ************* Trip Planning ******************

// Database
var subway = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// Return index (location) of single stop from database
var getIndexes = function(fromStop, toStop, line) { // arguements: string, string, array
  var index = {
    fromIndex: line.indexOf(fromStop),
    toIndex: line.indexOf(toStop),
  }
  return index;
}

// Return distance and direction from A to B on single line
var getTripData = function(index) {
  var tripProperties = { // Initialize as going forward
    distance: index.toIndex - index.fromIndex,
    reverse:0
  }
  // Going reverse?
  if(index.fromIndex > index.toIndex) {
    tripProperties.distance = -tripProperties.distance;
    tripProperties.reverse = 1;
  }
  return tripProperties;
}

// Return section of trip for printout
var getSection = function(index, line, reverse) {
  // Check for reverse direction
  if (!reverse) {
    return line.slice(index.fromIndex + 1, index.toIndex + 1);
  } else {
    return line.slice(index.toIndex, index.fromIndex).reverse();
  }
}

// ***************** Print functions
// Print format for single line trip
var printSingleLine = function(line, section, distance) {
  console.log("You must travel through the following stops on the " + line + " line: " + section + ".");
  console.log(distance + " stops in total.");
}

// Print format for multiple line trip
var printCrossLine = function(lines, sections, distance) {
  console.log("You must travel through the following stops on the " + lines[0] + " line: " + sections[0] + ".");
  console.log("Change at Union Square.");
  console.log("Your journey continues through the following stops on the " + lines[1] + " line: " + sections[1] + ".");
  console.log(distance + " stops in total.");
}

// Printer chooser
var printResult = function(isCrossLine, lines, sections, distance) {
  if (!isCrossLine) {
    printSingleLine(lines, sections, distance);
  } else {
    printCrossLine(lines, sections, distance);
  }
}

// ****** Real trip planners
var planTripSingle = function(fromLine, fromStop, toLine, toStop) {
  var index = getIndexes(fromStop, toStop, subway[fromLine]); // Do it this way, so I can use index for getTripData() and getSection()
  var tripData = getTripData(index); // Get distance from fromStop to toStop
  var section = getSection(index, subway[fromLine], tripData.reverse);// Get section for printResult()

  printResult(false, fromLine, section, tripData.distance);
}

var planTripCross = function(fromLine, fromStop, toLine, toStop) {
  // First section
  var index = getIndexes(fromStop, 'Union Square', subway[fromLine]);
  var fromTripData = getTripData(index);
  var fromSection = getSection(index, subway[fromLine], fromTripData.reverse);
  // Second section
  index = getIndexes('Union Square', toStop, subway[toLine]);
  var toTripData = getTripData(index);
  var toSection = getSection(index, subway[toLine], toTripData.reverse);

  var distance = fromTripData.distance + toTripData.distance;

  printResult(true, [fromLine, toLine], [fromSection, toSection], distance);
}

// ********** Main function
// Decide single line or cross over
var planTrip = function(fromLine, fromStop, toLine, toStop) {
  if (fromLine === toLine) {
    // Case: on the same line
    planTripSingle(fromLine, fromStop, toLine, toStop);
  } else {
    // Case: on different line
    planTripCross(fromLine, fromStop, toLine, toStop);
  }
}


// *************** User Interface ******************

// *************** Input checks
// Check if user inputs are valid
var checkLine = function(line) {
  if(Object.keys(subway).indexOf(line) !== -1) {
    return 1;
  } else {
    console.log('Invalid line name. Please try again.');
    return 0;
  }
}

var checkStop = function(stop, line) {
  if (subway[line].indexOf(stop) !== -1) {
    return 1;
  } else {
    console.log('Invalid stop name. Please try again');
    return 0;
  }
}

var getLineList = function() {
  return Object.keys(subway);
}

// ******** Main function
var userInterface = function(){
  var lineList = getLineList();

  var fromLine = prompt("Please enter your starting line.\nLine: " + lineList, "Line name");
  if (!checkLine(fromLine)) {
    return 0;
  }

  var fromStop = prompt("Please enter your starting stop.\nLine: " + fromLine + "\nStop: " + subway[fromLine], "Station name");
  if (!checkStop(fromStop, fromLine)) {
    return 0;
  }

  var toLine = prompt("Please enter your destination's line.\nLine: " + lineList, "Line name");
  if (!checkLine(toLine)) {
    return 0;
  }

  var toStop = prompt("Please enter your destination stop.\nLine: " + toLine + "\nStop: " + subway[toLine], "Station name");
  if (!checkStop(toStop, toLine)) {
    return 0;
  }

  planTrip(fromLine, fromStop, toLine, toStop);
}

userInterface();

// ************** Test Combinations
// Single line, forward
// planTrip('N', '23rd', 'N', 'Grand Central');


// Single line, backward
// planTrip('L', '1st', 'L', '6th');


// Cross Over, forward only
// planTrip('N', 'Time Squares', 'L', '3rd');


// Cross Over, with reverse
// planTrip('N', '23rd', '6', 'Grand Central');

// Cross Over, same station name
// planTrip('N', '28th', '6', '28th');
