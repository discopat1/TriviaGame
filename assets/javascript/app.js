

// Initial page setup
$(document).ready(function() {
    var number = 60;
    var intervalId;
    var correct = 0;
    var incorrect = 0;

$("#question-page").hide();
$("#results-page").hide();

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
    var quizObject = {
        q1: $('input[name=radioName]:checked', '#question1').val(),
        q2: $('input[name=radioName]:checked', '#question2').val(),
        q3: $('input[name=radioName]:checked', '#question3').val()
    };
    results(quizObject);
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
        number = 60;
        $("#timer").html(number);
        clearInterval(intervalId);
        var quizObject = {
            q1: $('input[name=radioName]:checked', '#question1').val(),
            q2: $('input[name=radioName]:checked', '#question2').val(),
            q3: $('input[name=radioName]:checked', '#question3').val()
        };
        results(quizObject);
    }
}
    // Results page shows up by submit or time running up
function results(userChoices) {
    $("#question-page").hide();
   $("#results-page").show();
   var quizObject = {
    q1: $('input[name=radioName]:checked', '#question1').val(),
    q2: $('input[name=radioName]:checked', '#question2').val(),
    q3: $('input[name=radioName]:checked', '#question3').val()
};
   for (var value in quizObject) {
    if (quizObject[value] === "correct") {
        correct++;
    } else {
        incorrect++;
    }
   };
    $("#results").html("Results: <br> You got " + correct + " right and " + incorrect + " wrong!");
}


   // Start over
$("#refresh").click(function() {
    $("#question-page").hide();
    $("#results-page").hide();
    $(".container").show();
    number = 60;
    $("#timer").html(number);
    clearInterval(intervalId);
    // couldn't get this to work... not sure why...
    $("input:radio").removeAttr("checked");                
});

});
