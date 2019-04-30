/*jshint esversion: 6 */ 

var questions = ["What is the MLB team in Detroit?", "Who won the World Series in 2017?"];

var index = 0;

function nextQuestion()
{
    index++;
}

function showQuestions(questions) 
{
    
    $("#question").html("<p>" + questions[index] + "</p>");
}

showQuestions(questions);
