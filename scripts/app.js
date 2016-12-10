var boxIndex = $('.box').index();
var bombArray = [];
var selections = [];

$(document).ready(function() {

  $(".box").on("click", function() {
    if($(this).hasClass("bombbox")) {
    } else {
    $(this).addClass("emptybox")
  }
  })
//array game board
var gameBoard =
  ['p1', 'p2', 'p3', 'p4', 'p5', 'p6',
  'p7', 'p8', 'p9', 'p10', 'p11', 'p12',
  'p13', 'p14', 'p15', 'p16', 'p17', 'p18',
  'p19', 'p20', 'p21', 'p22', 'p23', 'p24',
  'p25', 'p26', 'p27', 'p28', 'p29', 'p30'];

//Get random number, assign to bombArray & loop through to place randomly on board
function createBoard () {
for (var i = 0; i < 6; i++) {
  bombArray.forEach(function(element) {
    $('#' + element).click(function() {
    $(this).addClass("bombbox");
    })
})
  bombArray.push(gameBoard[(Math.floor(Math.random()*(30-1)+1))])
  console.log(bombArray)
  }
  return bombArray;
};

createBoard();

//
function checkWin(selections) {
  var ret = false;
//Checks for win scenario in bombArray
bombArray.forEach(function(combo){
    var count = 0;
    combo.forEach(function(num) {
      var match = selections.indexOf(num) > -1;
      if (match) {
        count++;
      }
    });
//if greater than 5, considered win
    if (count > 5) {
      ret = true;
    }
  });

  return ret;
}



//Timer
var count=14;
var counter=setInterval(timer, 1000); //will run every 1 second
function timer() {
  count=count-1;
  if (count < 0)
  {
  clearInterval(counter);
    location.reload("emptybox");
     return;
  }
  document.getElementById("timer").innerHTML=count + " secs";
}


});
