var playerData = '';
var boxIndex = $('.box').index();


$(document).ready(function() {

var boxNum = $(".box").length
// // for (var i = 1; i <= boxNum; i++) {
//   $('#p' + i).on('click', function() {
  // for (var i = 1; i <= boxNum; i++) {
  $(".box").on("click", function() {
    $(this).addClass("emptybox")
    console.log(this)
  })
  // $(".box").addClass('.emptybox');
//   })
// }
// $('.box').each(function(element) {
//   $(element).on('click', function() {
//     console.log('test')
//   });
//   });


});
