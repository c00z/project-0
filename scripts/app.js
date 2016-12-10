var playerData = '';
var boxIndex = $('.box').index();


$(document).ready(function() {

  $(".box").on("click", function() {
    $(this).addClass("emptybox")
    console.log(this)
  })

var gameBoard =
  ['p1', 'p2', 'p3', 'p4', 'p5', 'p6',
  'p7', 'p8', 'p9', 'p10', 'p11', 'p12',
  'p13', 'p14', 'p15', 'p16', 'p17', 'p18',
  'p19', 'p20', 'p21', 'p22', 'p23', 'p24',
  'p25', 'p26', 'p27', 'p28', 'p29', 'p30'];

//loop through bomb array assign new
var bombArray = [];
  bombArray.forEach(function() {
  $('#' + element).addClass("bombbox");
  }
)

//Get random number, assign to bombArray to place bombs randomly
function createBoard () {
for (var i = 0; i < 5; i++) {
  bombArray.push(gameBoard[(Math.floor(Math.random()*(30-1)+1))])
 return bombArray;
  }
};


//Timer
var count=6;
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
