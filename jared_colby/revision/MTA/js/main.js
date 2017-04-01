var mta = {
  "N": ["Times Square","34th","28th","23rd","Union Square","8th"],
  "L": ["8th","6th","Union Square","3rd","1st"],
  "6": [ "Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
}

var MultiLineTrip = function( startLine, startStation, endLine,endStation ){
  var singleLine =  mta[startLine];
    var startIndex = singleLine.indexOf(startStation);
    if (startLine === endLine){
      var endIndex = singleLine.indexOf(endStation);
      var stationStops = singleLine.slice(startIndex+1,endIndex+1);
      if (startIndex > endIndex){
        singleLine.reverse();
      }
           console.log('You must travel through the following stops on the '+ startLine + ' Line : '+ stationStops.toString()+ '. ');
            console.log((stationStops.length )+ ' stops in total.')

    }else{

      endIndex = singleLine.indexOf("Union Square");
      stationStops = singleLine.slice(startIndex,endIndex+1);
      var stationsPartTwo = mta[endLine];
      var secondStartIndex = stationsPartTwo.indexOf("Union Square");
      var secondEndIndex = stationsPartTwo.indexOf(endStation);
      var secondStops = mta[endLine].slice(secondStartIndex,secondEndIndex);

      if (startIndex > endIndex) {
        singleLine.reverse();
        startIndex = singleLine.indexOf(startStation);
        endIndex = singleLine.indexOf("Union Square");
        stationStops = singleLine.slice(startIndex+1,endIndex+1);
        stationsPartTwo = stationsPartTwo .reverse();
        secondStartIndex = stationsPartTwo.indexOf("Union Square");
        secondEndIndex = stationsPartTwo.indexOf(endStation);
        secondStops = stationsPartTwo .slice(secondStartIndex+1,secondEndIndex+1);
        var allStops = stationStops.concat(secondStops);
      }
      // console.log (allStops);
      console.log('You must travel through the following stops on the '+ startLine + ' Line : '+ stationStops.toString()+ '. ');
      console.log('Change trains at "Union Square". ')
      console.log('You must then travel through the following stops on the '+ endLine + ' Line : '+ secondStops.toString()+ '. ');
      console.log((allStops.length)+ ' stops in total.')

    }
};

MultiLineTrip('N', "Times Square", "N", "8th");
MultiLineTrip('L', "1st", "N", "Times Square");
// MultiLineTrip('N', "8th", "L", "8th");
// MultiLineTrip('N', "Times Square", "L", "1st");
