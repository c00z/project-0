var playerData = '';
var boxIndex = $('.box').index();


$(document).ready(function() {
//modal value
// $('#myModal').modal('show');


  $(".box").on("click", function() {
    $(this).addClass("bombbox")
    console.log(this)
  })

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

//for (var i = 0; i < 5; i++)
