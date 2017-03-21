
//when to use arrow functions
// prevents implement return, preserves the this context


 GamePlay = {
  start: function(){},
  stop: function(){},
  startTimer: function(){},
  stopTimer: function(){},
  resetTimer:  function(){},
  reveal:  function(){}

}

// Board class is responsible for:
// drawing board, planting mines, calculating mine distance
// traversing the board and revealing fields.

//Hal's Tips
//todo: create board in js files
// create a wrapper made a div with an id
// lets you create more than one
// make board as a constructor function


var Board = {

  boardData: [],

  createAndShowBoard: function () {  //render

    //change eventually to be dynamicly  built

    var tablehtml = '';
    for (var h=0; h<9; h++) {
      tablehtml += "<tr id='row+" + h + "'>";
      for (var w=0; w<9; w++) {
        tablehtml += "<td id='" + w + "-" + h + "'></td>";
      }
      tablehtml += "</tr>";
    }

    document.getElementById("board").innerHTML = tablehtml;

    //change eventually to be dynamicly  built
    for(var i=0; i<9; i++){
      this.boardData[i] = []
      for(var j=0; j<9; j++){
        this.boardData[i][j] = new singleField(i,j)
      }
    }
    // console.log(this.boardData)
    this.plantMines(this.boardData);
    console.log('TESt!')
    this.traverseBoard(this.boardData,this.logCords)
    this.traverseBoard(this.boardData,this.addEventListener);

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

  traverseBoard: function(board,func){
    board.forEach(function(row){
      row.forEach(function(squareObj){
        func(squareObj);
      })
    })

  },

  calculateDistance: function(){

  },

  logCords: function(squareObj){
      let coordinates = squareObj.x +':'+squareObj.y;
      console.log("coords:", coordinates)
  },

  addEventListener: function(squareObj){
    let x  = squareObj.x;
    let y = squareObj.y;
    let feild = document.getElementById(x+'-'+y)
    feild.addEventListener('click',function(){
      alert('you clicked:'+x+":"+y)
    })
    // if(x%2===0) feild.style.backgroundColor = "red";
    // else feild.style.backgroundColor = "grey";

  }

}



function singleField(x,y) {
    //this.element = element; //what is this for?
    this.x = x;
    this.y = y;
    this.mineCount = 0;

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


//NOTE TIPS
//this refrences the obejct being called on
// not the obejct where it is defiend
