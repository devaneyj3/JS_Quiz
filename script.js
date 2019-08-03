/*jshint esversion: 6 */ 

var index = 0;
var score = 0;
var endOfQuiz = false;

function Questions(quizQuestion, options = [], correctAnswer) {
    this.quizQuestion = quizQuestion;
    this.options = options;
    this.correctAnswer = correctAnswer;
}

var questionArr = [];
var mlsQuestion = new Questions("Does Detroit have an MLS team?", ["Yes", "No"], "No");
var mlbQuestion = new Questions("What is the MLB team in Detroit?", ["Tigers", "Blue Jackets"], "Tigers");
var javaScript = new Questions("Is Javascript fun?", ["Yes", "No"], "Yes");
var president = new Questions("Who is the president as of 2019?", ["Donald Trump", "Barack Obama"], "Donald Trump");
var lambda = new Questions("Is Lambda School one of the best bootcamps?",["Yes", "No"],"Yes");
var career = new Questions("What career is Jordan pursuing?", ["Web Developer", "Male Model"],"Web Developer");
var capitol = new Questions("What is the capitol of Michigan?", ["Lansing", "Ann Arbor"], "Lansing");
var movie = new Questions("As of July 2019, what is the highest grossing movie of all time?", ["Avatar", "The Avengers: Endgame"], "The Avengers: Endgame");
var office = new Questions("What is the paper company that the people in the TV show, The Office, work for?",["Dunder Mifflin", "Ohio Paper Company"],"Dunder Mifflin");
var stateOffice = new Questions("What state does The Office take place in?", ["Pennsylvania", "Ohio"],"Pennsylvania");

questionArr.push(mlsQuestion, mlbQuestion, javaScript, president, lambda, caches, capitol, movie, office, stateOffice);

console.log(questionArr);
function nextQuestion()
{
    index++;
    if(index >= questionArr.length)
    {
        endOfQuiz = true;
        $('.score').text("You got " + score + " out of " + questionArr.length);
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
        $("#question").html("<p>" + questionArr[index].quizQuestion+ "</p>");
        $(".options").html("<p class='option'><input class='radio form-check-input' type='radio' name='option' value='" + questionArr[index].options[0]+ "'>" + questionArr[index].options[0] + "<br></p>");
        $(".options").append("<p class='option'><input class='radio form-check-input' type='radio' name='option' value='" + questionArr[index].options[1]+ "'>" + questionArr[index].options[1]+ "<br></p>");
       
        checkAnswer();

    }
}
function checkAnswer() 
{
    $(".radio").click(function(){
        var radioValue = $(".radio:checked").val();
        console.log("Radio Value is " + radioValue);
        if(radioValue == questionArr[index].correctAnswer) 
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

