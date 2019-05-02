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
    },
    {
        quizQuestion: "What is the capitol of Michigan?",
        options: ["Lansing", "Ann Arbor"],
        correctAnswer: "Lansing",
    },
    {
        quizQuestion: "As of May 2019, what is the highest grossing movie of all time?",
        options: ["Avatar", "The Avengers: Endgame"],
        correctAnswer: "Avatar",
    },
    {
        quizQuestion: "What is the paper company that the people in the TV show, The Office, work for?",
        options: ["Dunder Mifflin", "Ohio Paper Company"],
        correctAnswer: "Dunder Mifflin",
    },
    {
        quizQuestion: "What state does The Office take place in?",
        options: ["Pennsylvania", "Ohio"],
        correctAnswer: "Pennsylvania",
    }
];

function nextQuestion()
{
    index++;
    if(index >= Questions.length)
    {
        endOfQuiz = true;
        $('.score').text("You got " + score + " out of " + Questions.length);
    }
    else{
        displayQuestions();
    }
}

function displayQuestions() 
{
    if(endOfQuiz == false)
    {
        console.log("Index is " + index);
        $("#question").html("<p>" + Questions[index].quizQuestion+ "</p>");
        $(".options").html("<p class='option'><input class='radio form-check-input' type='radio' name='option' value='" + Questions[index].options[0]+ "'>" + Questions[index].options[0] + "<br></p>");
        $(".options").append("<p class='option'><input class='radio form-check-input' type='radio' name='option' value='" + Questions[index].options[1]+ "'>" + Questions[index].options[1]+ "<br></p>");
       
        checkAnswer();
        

    }
}


function checkAnswer() 
{
    $(".radio").click(function(){
        var radioValue = $(".radio:checked").val();
        console.log("Radio Value is " + radioValue);
        if(radioValue == Questions[index].correctAnswer) 
        {
            score++;
            console.log("Score is " + score);
            nextQuestion();
          
        }
        else {
            nextQuestion();
        }
    });
}



displayQuestions();

