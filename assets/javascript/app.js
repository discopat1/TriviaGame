window.onload = function(){
    // variables
    var number = 90;
    var intervalId;
    var correct

// Initial page setup
$(document).ready(function() {
$("#question-page").hide();
$("#results-page").hide();
});
    // Start quiz
$("#start").click(function() {
    $(".container").hide();
    $("#results-page").hide();
    $("#question-page").show();
    countdown();
});
    // Submit quiz
$("#submit").click(function() {
    $("#question-page").hide();
    $("#results-page").show();
});
    // Timer function
function countdown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    number--;
    $("#timer").html(number);
    if (number === 0) {
        // results();
    }
}
    // Results page shows up by submit or time running up
// function results() {
//     if () {
//         correct++;
//     }
//     else {
//         incorrect++;
//     }
//     $("#results").append("You got " + correct + " right and " + incorrect + " wrong!");
// }

   // Start over
$("#refresh").click(function() {
    $("#question-page").hide();
    $("#results-page").hide();
    $(".container").show();
    clearInterval(intervalId);
});

};