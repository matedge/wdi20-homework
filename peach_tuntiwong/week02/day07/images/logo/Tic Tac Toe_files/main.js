$(document).ready(function() {
  var tictactoe = {
    currentPlayer: 1,
    winner: 0,
    board: [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]],
    getPosition: function(boxId) {
      var row = boxId[0];
      var col = boxId[2];
      this.pushInput(row, col);
    },
    pushInput: function(row, col) {
      if(tictactoe.currentPlayer === 1) {
        this.board[row][col] = 1;
        $('#' + row + '-' + col).html(this.currentPlayer);
        this.currentPlayer = 2;
      } else {
        this.board[row][col] = 2;
        $('#' + row + '-' + col).html(this.currentPlayer);
        this.currentPlayer = 1;
      }
      console.log(this.board);
      this.checkRow(row);
      this.checkCol(col);
      if ((row+col)%2 === 0){
        console.log(row + ' ' + col);
        console.log('checking diag');
        this.checkDiag();
      }

    },
    isEmptySlot: function(box1, box2, box3) {
      if (box1===0 || box2===0 || box3===0) {
        return true;
      } else {
        return false;
      }
    },
    checkRow: function(row) {
      var emptySlot = this.isEmptySlot(this.board[row][0], this.board[row][1], this.board[row][2]);

      if (!emptySlot) {
        //check if all in the row matches
      }

      if (this.winner !== 0) {
        alert('The winner is player ' + this.winner);
      }
    },
    checkCol: function(col) {
      var emptySlot = this.isEmptySlot(this.board[0][col], this.board[1][col], this.board[2][col]);

      if (this.winner !== 0) {
        alert('The winner is player ' + this.winner);
      }
    },
    checkDiag: function() {
      var emptySlot = this.isEmptySlot(this.board[0][0], this.board[1][1], this.board[2][2]);
      if  (!emptySlot) {
        if (this.board[0][0] === this.board[1][1] === this.board[2][2]) {
          this.winner = this.board[1][1];
          console.log(this.winner);
        }
      }
      var emptySlot = this.isEmptySlot(this.board[2][0], this.board[1][1], this.board[0][2]);
      if  (!emptySlot) {
        if (this.board[2][0] === this.board[1][1] === this.board[0][2]) {
          this.winner = this.board[1][1];
          console.log(this.winner);
        }
      }

      if (this.winner !== 0) {
        alert('The winner is player ' + this.winner);
      }
    }
  }



  $(document).on('click', '.box', function() {
    var clickedId = $(this).attr('id');
    tictactoe.getPosition(clickedId);
  });




})
