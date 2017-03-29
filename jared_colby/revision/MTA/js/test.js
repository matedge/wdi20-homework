var mta = {
  "N": ["Times Square","34th","28th","23rd","Union Square","8th"],
  "L": ["8th","6th","Union Square","3rd","1st"],
  "6": [ "Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
}


var MultiLineTrip = function( startLine, startStation, endLine,endStation ){
  var singleLine =  mta[startLine];
    if (startLine === endLine){
      var startIndex = singleLine.indexOf(startStation);
      var endIndex = singleLine.indexOf(endStation);
      var stationStops = mta[startLine].slice(startIndex,endIndex+1);
        if (startIndex > endIndex){

          var stationsPartOne = mta[startLine].reverse();
              startIndex = singleLine.indexOf(startStation);
              endIndex = singeLine.indexOf(endStation);
              stationStops = mta[startLine].slice(startIndex,endIndex+1);

        }
           console.log('You must travel through the following stops on the '+ startLine + ' Line : '+ stationStops.toString()+ '. ');
            console.log((stationStops.length-1 )+ ' stops in total.')

    }else{

      var stationsPartOne = mta[startLine]
      var startIndex = stationsPartOne.indexOf(startStation);
      var endIndex = stationsPartOne.indexOf("Union Square");
      var firstStops = mta[startLine].slice(startIndex,endIndex+1);

      var stationsPartTwo = mta[endLine];
      var secondStartIndex = stationsPartTwo.indexOf("Union Square");
      var secondEndIndex = stationsPartTwo.indexOf(endStation);
      var secondStops = mta[endLine].slice(secondStartIndex,secondEndIndex);

      if (startIndex > endIndex) {
         stationsPartOne = mta[startLine].reverse();
         startIndex = stationsPartOne.indexOf(startStation);
         endIndex = stationsPartOne.indexOf("Union Square");
         firstStops = mta[startLine].slice(startIndex,endIndex);

         stationsPartTwo = mta[endLine].reverse();
         secondStartIndex = stationsPartTwo.indexOf("Union Square");
         secondEndIndex = stationsPartTwo.indexOf(endStation);
         secondStops = mta[endLine].slice(secondStartIndex,secondEndIndex+1);

        var allStops = firstStops.concat(secondStops);
      }




      console.log (allStops);
      console.log('You must travel through the following stops on the '+ startLine + ' Line : '+ firstStops.toString()+ '. ');
      console.log('Change trains at "Union Square". ')
      console.log('You must then travel through the following stops on the '+ endLine + ' Line : '+ secondStops.toString()+ '. ');
      console.log((allStops.length)+ ' stops in total.')

    }

};
  // singleLineTrip('N', "Times Square", "N", "8th");
MultiLineTrip('N', "Times Square", "N", "8th");
MultiLineTrip('L', "1st", "N", "Times Square");
MultiLineTrip('N', "Times Square", "L", "1st");
