/*jshint esversion: 6 */ 

var index = 0;
var score = 0;


var Questions = [
    {
        quizQuestion: "Does Detroit have an MLS team?",
        options: ["Yes", "No"],
        correctAnswer: "No",
    },
    {
        quizQuestion: "What is the MLB team in Detroit?",
        options: ["Tigers", "Blue Jackets"],
        correctAnswer: "Tigers",
    },
    {
        quizQuestion: "Is Javascript fun?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
    }
];

function nextQuestion()
{
    index++;
    displayQuestions();
}

function displayQuestions() 
{
    
    $("#question").html("<p>" + Questions[index].quizQuestion+ "</p>");
    $(".options").html("<p class='option'><input class='radio' type='radio' name='option' value='" + Questions[index].options[0]+ "'>" + Questions[index].options[0] + "<br></p>");
    $(".options").append("<p class='option'><input class='radio' type='radio' name='option' value='" + Questions[index].options[1]+ "'>" + Questions[index].options[1]+ "<br></p>");

    checkAnswer();
   
}

function checkAnswer() 
{
    $(".radio").click(function(){
        var radioValue = $(".radio:checked").val();
        if(radioValue == Questions[index].correctAnswer) 
        {
            score++;
            nextQuestion();
        }
        else {
            nextQuestion();
        }
    });
}



displayQuestions();

