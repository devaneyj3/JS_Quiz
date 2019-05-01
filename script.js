/*jshint esversion: 6 */ 

var index = 0;
var score = 0;
var endOfQuiz = false;


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
    },
    {
        quizQuestion: "Who is the president as of 2019?",
        options: ["Donald Trump", "Barack Obama"],
        correctAnswer: "Donald Trump",
    },
    {
        quizQuestion: "Is Lambda School one of the best bootcamps?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
    },
    {
        quizQuestion: "What career is Jordan pursuing?",
        options: ["Web Developer", "Male Model"],
        correctAnswer: "Web Developer",
    }
];

function nextQuestion()
{
    index++;
}

function displayQuestions() 
{
    if(endOfQuiz == false)
    {
        $("#question").html("<p>" + Questions[index].quizQuestion+ "</p>");
        $(".options").html("<p class='option'><input class='radio' type='radio' name='option' value='" + Questions[index].options[0]+ "'>" + Questions[index].options[0] + "<br></p>");
        $(".options").append("<p class='option'><input class='radio' type='radio' name='option' value='" + Questions[index].options[1]+ "'>" + Questions[index].options[1]+ "<br></p>");
       
        checkAnswer();

    }
}
$(".submitButton").click(function(){
    if(index >= Questions.length)
    {
        endOfQuiz = true;
        $('.score').text("You got " + score + " out of " + Questions.length);
    }
    else{
        displayQuestions();
    }

});


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

