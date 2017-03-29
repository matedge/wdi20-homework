var revengeOfbadger = {
  studentClaps:{

    'Jared': 1,
    'Fred': 2,
    'Alice':3,
},

shortList: [],

  getCandidates: function () {

    for(studentName in this.studentClaps){
      if (this.studentClaps[stuentName] > 2 ){
        this.shortList.push( studentName);
      }
    }
    return this.shortList.length;
  },

  drawWinner: function () {

    var winner;
    var numberOfCandidates = this.getCandidates();

    if (numberOfCandidates === 0){
      winner = "Badger";
    }else{
      var winnerIndex = Math.floor(Math.random()* numberOfCandidates);
      winner = this.shortlist[winnerIndex];
    }
    console.log("Lucky " + winner );
  }
};
