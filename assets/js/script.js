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
var possAnswers = document.querySelector("#choices");
var correctAnswer = document.querySelector("#answerChoiceValidate");
// Choice Variables
var A = document.querySelector("#choiceA");
var B = document.querySelector("#choiceB");
var C = document.querySelector("#choiceC");
var D = document.querySelector("#choiceD");

// Questions Array
var possibleQuestions = 
[
    {   
        question: "Which of the following is not a data type in Javascript?",
        choices: ["Number", "Character", "Boolean", "String"],
        answer: "Character"
    },
    {   
        question: "What does 'this' refer to in Javascript?",
        choices: ["A variable you can assign a value to", "'this' is not a Javascript parameter", "The running Javascript code", "The object from which it is called"],
        answer: "The object from which it is called"
    },
    {   
        question: "What smybols are used for comments in Javascript?", 
        choices: ["<!--  -->", "// for Single line comments", "/* Multi Line Comment */", "B & C"],
        answer: "B & C"
    },
    {
        question: "What is the === operator?",
        choices: ["Compares values", "Compares data types", "Compares both value and data type", "None of the above"],
        answer: "Compares both value and data type"
    },
    {
        question: "What kind of pop up box is avaibale in Javascript?",
        choices: ["Prompt", "Confirm", "Alert", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "Is JavaScript case sensitive?",
        choices: ["Yes", "No", "Maybe", "I don't know"],
        answer: "Yes"
    },
    {
        question: "what is DOM?",
        choices: ["Document Object Model", "Digital Online Media", "Data Object Model", "Data Output Message"],
        answer: "Document Object Model"
    },
    {
        question: "What does the push() function accomplish?",
        choices: ["Adds new element to beginning of array", "Adds new element to end of array", "Replaces element at beginning of array", "Replaces element at end of array"],
        answer: "Adds new element to end of array"
    },
    {
        question: "What does || represent?",
        choices: ["And", "Not", "Or", "None of the Above"],
        answer: "Or"
    },
    {
        question: "What function would I use to combine two arrays into a string?",
        choices: ["push()", "pop()", "splice()", "join()"],
        answer: "join()"
    },
    {
        question: "If I want to have a variable accessible by all functions, what type should I use?",
        choices: ["Local", "Global", "Block-scoped", "All of the above"],
        answer: "Global"
    }

];

//Functions 
function generateQuestions() 
{
    //if still in array
    if (currentQ < possibleQuestions.length) 
    {
        question.textContent = possibleQuestions[currentQ].question;
        A.textContent = possibleQuestions[currentQ].choices[0];
        B.textContent = possibleQuestions[currentQ].choices[1];
        C.textContent = possibleQuestions[currentQ].choices[2];
        D.textContent = possibleQuestions[currentQ].choices[3];
    } 
}

function compareAnswer(entry)
{
    if(entry===possibleQuestions[currentQ].answer)
    {
        correctAnswer.textContent = "That's correct!";
    }
    else
    {
        correctAnswer.textContent = "That's incorrect!";
        totalTime -= 10;
    }
}

function startTimer()
{
    var timerinterval = setInterval(function(){
        totalTime --;
      
        if(totalTime === 0){
          clearInterval(timerinterval);
          timerDisplay.textContent = "Time's Up!"
        }
        else{
          timerDisplay.textContent = totalTime ;
        }
    }, 1000);
}

// Event Listeners
start.addEventListener("click", function(event)
{
    begin.classList.add('d-none');
    quiz.classList.remove('d-none');
    generateQuestions();
    startTimer();
})

possAnswers.addEventListener("click", function (event) 
{
  var event = event.target;
  compareAnswer(event.textContent);
  currentQ++;
  generateQuestions();
});