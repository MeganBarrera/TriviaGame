var choices = [];

function choiceSelect() {
  $(".form-check-input").empty();
  for (var i = 0; i < choices.length; i++) {
    var selected = $(".form-check-input");
    $(".form-check-input").on("click", function(event) {
      event.preventDefault();
    });
  }
}

$(".choice").on("click", function() {
if(value == "Correct")
  alert("Your answer is correct!");
else
  alert("Your answer is wrong!");
})




//$(".submit").click(function() {
 // var answer = document.getElementByName("choice");
 //   for (var i = 0, i < answer.length; i++) {
 //     if(answer[i].checked) {
//        if(answer[i].value == "Correct" )
  //        alert("Your answer is correct");
    //  }
   // }



 // });
