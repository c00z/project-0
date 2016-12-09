var playerData = '';
var boxIndex = $('.box').index();


$(document).ready(function() {

  $(".box").on("click", function() {
    $(this).addClass("bombbox")
    console.log(this)
  })

//Timer
var count=5;
var counter=setInterval(timer, 1000); //will run every 1 second

function timer() {
  count=count-1;
  if (count < 0)
  {
  clearInterval(counter);
     location.reload("emptybox");
     return;
  }

  document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling



}



});
