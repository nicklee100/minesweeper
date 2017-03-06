
//when to use arrow functions


 GamePlay = {
  start: function(){},
  stop: function(){},
  startTimer: function(){},
  stopTimer: function(){},
  resetTimer:  function(){},
  reveal:  function(){}

}

// Board class is responsible for drawing a board,
// planting mines, calculating mine distance, traversing
// the board and revealing fields.


//todo: crate board in js files
// create a wrapper made a div with an id
  // lets you create more than one
// make board as a constructor function


var Board = {

  boardData: [],

  createAndShowBoard: function () {  //render

    var tablehtml = '';
    for (var h=0; h<9; h++) {
      tablehtml += "<tr id='row+" + h + "'>";
      for (var w=0; w<9; w++) {
        tablehtml += "<td id='" + w + "-" + h + "'></td>";
      }
      tablehtml += "</tr>";
    }

    document.getElementById("board").innerHTML = tablehtml;

    //returns a matrix of field objects
    for(var i=0; i<9; i++){
      this.boardData[i] = []
      for(var j=0; j<9; j++){
        console.log(i,j)
        this.boardData[i][j] = new singleField(i,j)
      }
    }
    console.log(this.boardData)
    this.plantMines(this.boardData);

  },

  getRandomNumber: function(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min
  },

  plantMines: function(feild){
    for(var i=0; i<9; i++){
      var x = this.getRandomNumber(0,8);
      var y = this.getRandomNumber(0,8);
      var square = feild[x][y]
      square.setMine();
      //console.log(square)
    }
  },


  traverseBoard: function(board,func){  // traversres the board and lets you run function
    board.forEach(function(row){
      row.forEach(function(square){
        func(square);
      })
    })

  },

  calculateDistance: function(){

  }

}




//i will need to make a baor of many many mines

function singleField(x,y) {   //
    //this.element = element; //what is this?
    this.x = x;
    this.y = y;
    this.mineCount = 0;

    //what shoudl I set this to be in the beginning?
    this.isFlagged = false;
    this.isRevealed = false;
    this.isMine = false;
    this.isEmpty = false;
}

// check surrouding function

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

singleField.prototype.setMineCount = function(){
    // check surrouding function// reducuec   ..
    this.checkSurroudings(function(){  //  this would lose context and need to be bound

    })

  this.count = num;
  //traverse the board and count the immediate surroudnin aread of mins

}

singleField.prototype.setText = function(){
}





Board.createAndShowBoard();


//TIPS
//this refrences the obejct being called on
// not the obejct where it is defiend
