
//when to use arrow functions


function GamePlay(){

}

// Board class is responsible for drawing a board,
// planting mines, calculating mine distance, traversing
// the board and revealing fields.



var Board = {

  createAndShowBoard: function () {

    //var mstable = document.createElement("table");
    var tablehtml = '';

    for (var h=0; h<9; h++) {
      tablehtml += "<tr id='row+" + h + "'>";
      for (var w=0; w<9; w++) {
        tablehtml += "<td id='" + w + "-" + h + "'></td>";
      }
      tablehtml += "</tr>";
    }

  document.getElementById("board").innerHTML = tablehtml;

  }
}


//i will need to make a baor of many many mines

function singleField() {   //
  this.element = element; //what is this?
  this.x = x || null;
  this.y = y || null;
  this.mineCount = 0;

  //what shoudl I set this to be in the beginning?
  this.isFlagged = false;
  this.isRevealed = false;
  this.isMine = false;
  this.isEmpty = false;
}


singleField.prototype.toggleFlagged = function(){
  this.isFlagged = this.isFlagged ? false : true;
}

singleField.prototype.setRevealed = function(){
  this.isRevealed = true;
}

singleField.prototype.setMine = function(){
  this.isMine = true;
}

singleField.prototype.setEmpty = function(){
  this.isEmpty = true;
}

singleField.prototype.setMineCount = function(num){
  this.count = num;
}

singleField.prototype.setText = function(){
}





Board.createAndShowBoard();
