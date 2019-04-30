/*jshint esversion: 6 */ 

var questions = {
    question: "What is the MLB team in Detroit?",
    options: ["Tigers", "Demolition", "Blue Jackets"],
    correctAnswer: "Tigers"
};

var index = 0;
var score = 0;

function nextQuestion()
{
    index++;
}

function showQuestions(questions) 
{
    
    $("#question").html("<p>" + questions.question + "</p>");
    $(".options").html("<p class='option'><input class='radio' type='radio' name='option' value='" + questions.options[0]  + "'>" + questions.options[0] + "<br></p>");
    $(".options").append("<p class='option'><input class='radio' type='radio' name='option' value='" + questions.options[1]  + "'>" + questions.options[1] + "<br></p>");
    $(".options").append("<p class='option'><input class='radio' type='radio' name='option' value='" + questions.options[2]  + "'>" + questions.options[2] + "<br></p>");

    checkAnswer();
   
}
function checkAnswer() 
{
    $(".radio").click(function(){
        var radioValue = $(".radio:checked").val();
        if(radioValue == questions.correctAnswer) 
        {
            score++;
            alert("That is correct");
        }
        else {
            alert("Try again");
        }
    });
}



showQuestions(questions);

