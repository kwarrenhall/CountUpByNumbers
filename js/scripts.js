// front end*********
$(document).ready(function(){
  $("form").submit(function(event) {
  var userNumber = parseInt($("input#number").val());
  var userCounter = parseInt($("input#counter").val());
  var result = countUp(userNumber, userCounter);
  $("#outPut").text(result);
  $(".result").show();
  event.preventDefault();
  });
});


// // back end*********
// function countUp(number, counter) {
//   var outPut = [];
//   for (var i = counter; i <= number; i += counter){
//   outPut.push(i);
//   }
//   return outPut;
// }
//


// var number = countUp(1, 30);

If function countUp(number, counter) {
  var outPut = [];
  for (var i = counter; i <= number; i += counter){
  outPut.push(i);
  }
  return outPut;
} else if function divisibleBy3(number) {
  (number % 3 === 0);
 return pong;
}
});
