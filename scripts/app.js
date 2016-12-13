var bombArray = [];
var hasWon = false;
var heartBeat = $("#heartBeat");

$(document).ready(function() {

  $('#board').on('click', '.box', function(evt) {
    var $element = $(evt.target);
    var id = $element.attr('id');
    var index = bombArray.indexOf(id);

    if (index > -1) {
      $element.addClass("bombbox");
      bombArray.splice(index, 1);
    } else {
      $element.addClass("emptybox");
    }

    if (!bombArray.length) {
      hasWon = true;
      alert('YOU DEFUSED THE BOMBS!');
    }
  });

//array game board
var gameBoard =
  ['p1', 'p2', 'p3', 'p4', 'p5', 'p6',
  'p7', 'p8', 'p9', 'p10', 'p11', 'p12',
  'p13', 'p14', 'p15', 'p16', 'p17', 'p18',
  'p19', 'p20', 'p21', 'p22', 'p23', 'p24',
  'p25', 'p26', 'p27', 'p28', 'p29', 'p30'];

  //Get random number, assign to bombArray & loop through to place randomly on board
  function createBoard () {
    bombArray = new Array(6).fill().map(() => {
      return gameBoard[(Math.floor(Math.random()*(30-1)+1))];
    });

    console.log(bombArray)
    return bombArray;
  };

  createBoard();

  // var hasBeenClicked = false;
  // jQuery('bombox').click(function () {
  //     hasBeenClicked = true;
  // });
  //
  // if (hasBeenClicked) {
  //     $('.header').html(`You have won`);
  // }

  //
  // $('.bombox').click(function(){
  //   $(this).data('clicked', true);
  //
  // if($('.bombbox').data('clicked')) {
  //     $('.header').html(`You have won`);
  // // } else {
  // //     //run function2
  // }

  // });
  //
  // if ($(".bombbox").on("click", function() {
  //   // var selections = 0;
  //   selections ++;
  //   return;
  //  $("#userscore").css("User Score: " + selections);
  // })
  // console.log(selections)

  //Checks for win scenario in bombArray
  // function checkWin(selections) {
  //   var ret = false;
  // bombArray.forEach(function(combo){
  //     var count = 0;
  //     combo.forEach(function(num) {
  //       var match = selections.indexOf(num) > -1;
  //       if (match) {
  //         count++;
  //       }
  //     });
  // //if greater than 5, considered win
  //     if (count > 5) {
  //       ret = true;
  //     }
  //   });
  //   return ret;
  // }
  //
  // console.log(selections)

  //TIMER
  var count = 0;
  $(".button").on('click', function(){
     var count = 11;
     setInterval(function() {
       count--;
        if (count >= 0) {
           span = $(".count");
           span.innerHTML = count;
           console.log(count)
        }
        if (count === 0) {
           alert('YOU JUST WENT BOOOOOOM!');
           clearInterval(count);
           location.reload("#board");
           return;
         }
         document.getElementById("timer").innerHTML=count + " secs";
       }, 1000);
  });

  //cover div
  //
  // $("#dimScreen").on("click", function() {
  //     $(".hiddenDiv").css({
  //       height: "0px"
  //     }, 1000 ); // how long the animation should be
  //   });


  // audio

  function playHeart() {
    heartBeat.play();
  }
});
