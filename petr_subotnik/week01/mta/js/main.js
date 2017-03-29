//planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

//The program takes the line and stop that a user is getting on at
// and the line and stop that user is getting off at
// and prints the journey and the total number of stops for the trip in the console:

//Get the program to work for a single line before trying to tackle multiple lines!!!!!!!!!!

//The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th


//get on Times Square and get off Union Square      travel through 34th 28th 23rd       number of stops: 4 stops!
//TRIP 'TIMES SQUARE' TO 'UNION SQUARE'!!!!!

//                [0]          [1]     [2]     [3]        [4]          [5]
// var nLine = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];

//finding a position of input stations

// var positionOfStation1 = function(){
//   return nLine.indexOf('Times Square');
// };
//
// var positionOfStation2 = function(){
//   return nLine.indexOf('Union Square');
// };
//
// var position1 = positionOfStation1();  //gives me an index of station 1
// var position2 = positionOfStation2();  //gives me an index of station 2
//
// var trip = nLine.slice(position1, position2);
// console.log(trip);

var lines = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
};


var planTrip = function(startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {

    var subwayLines = Object.keys(lines);                      //accessing property names (all three lines)!

    var whichLine = subwayLines;

    var firstLine = whichLine.indexOf(startLine);
    var secondLine = whichLine.indexOf(endLine);


    var stations1 = firstLine[startStation];                   // CANT WORK IT OUT FOR STARTLINE & ENDLINE!!!!!!!
    var stations2 = secondLine[endStation];

    var startIndex = stations1.indexOf(startStation);           //finding a position of start stations
    var endIndex = stations2.indexOf(endStation);               //finding a position of last stations

    if(startIndex < endIndex){
       var trip = stations.slice(startIndex, endIndex+1);         //slice - finding an index of start stations and last stations
       console.log('Forward direction');
       console.log('You must travel through following stations ' + startIndex+1 + endIndex);
    } else {
    // startIndex >= endIndex
       var trip = stations.slice(endIndex, startIndex+1);
       trip = trip.reverse();
       console.log('Reverse direction');
    }
    console.log(startIndex, endIndex);
    console.log(trip);



  }else{

    var planTrip = function(startLine, startStation, endLine, endStation){
      var firstJourney = planTrip(startLine, startStation, endLine, "Union Square");
      var secondJourney = firstJourney(startLine, "Union Square", endLine, endstation);



      }





    }


    console.log(startIndex, endIndex);
    console.log(trip);

  }
};

planTrip('N', 'Union Square', 'N', 'Times Square');









//
//
//                             // 'N',    '34th',  'Union Square'
// var singleLineTrip = function(line, startStation, line, endStation) {
//
//
//    var stations = lines[line];                                // each lines(N,L,6)
//
//    var startIndex = stations.indexOf(startStation);           //finding a position of start stations
//    var endIndex = stations.indexOf(endStation);               //finding a position of last stations
//
//    if(startIndex < endIndex){
//       var trip = stations.slice(startIndex, endIndex+1);         //slice - finding an index of start stations and last stations
//       // console.log('Forward direction');
//
//    } else {
//       // startIndex >= endIndex
//       var trip = stations.slice(endIndex, startIndex+1);
//       trip = trip.reverse();
//       // console.log('Reverse direction');
//
//    }
//
//    console.log(startStation, endStation);
//    console.log("You mus travel through " + trip[1]  );
//
//
// };
//
// singleLineTrip('N', 'Times Square', 'N', 'Union Square');
