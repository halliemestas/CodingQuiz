// Global Variables 

// Webpage first loads
var begin = document.querySelector("#first");
var start = document.querySelector("#startbtn");
var lb = document.querySelector("#leaderboardbtn");

// After start selected
var quiz = document.querySelector("#quizCont");
var timerDisplay = document.querySelector("#timer");
var totalTime = 60; 
var qAa = document.querySelector("#sub");
var question = document.querySelector("#question");
// index for current question
var currentQ = 0;
// Answer Selected and Correct Answer Display variables
var possAnswer = document.querySelector("#choices");
var correctAnswer = document.querySelector("#answerChoiceValidate");
// Choice Variables
var a = document.querySelector("#choiceA");
var b = document.querySelector("#choiceB");
var c = document.querySelector("#choiceC");
var d = document.querySelector("#choiceD");

//Functions 


// Event Listeners
start.addEventListener("click", function(event)
{
    begin.classList.add('d-none');
    quiz.classList.remove('d-none');
    console.log("Start clicked!");
})