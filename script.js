var vanillaScore = 0;
var chocolateScore = 0;
var questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var result = document.getElementById("result");

var restart = document.getElementById("restart");

q1a1.addEventListener("click", chocolate);
q1a2.addEventListener("click", vanilla);

q2a1.addEventListener("click", vanilla);
q2a2.addEventListener("click", chocolate);

q3a1.addEventListener("click", vanilla);
q3a2.addEventListener("click", chocolate);

q4a1.addEventListener("click", vanilla);
q4a2.addEventListener("click", chocolate);

q5a1.addEventListener("click", chocolate);
q5a2.addEventListener("click", vanilla);
q5a3.addEventListener("click", vanilla);
q5a4.addEventListener("click", chocolate);

restart.addEventListener("click", restartTest);

function chocolate() {
  chocolateScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " chocolateScore = " + chocolateScore)

  if (questionCount == 5) {
    console.log("The quiz is done!")
    updateResult()
  }
}

function vanilla() {
  vanillaScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " vanillaScore = " + vanillaScore)

  if (questionCount == 5) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function updateResult() {
  if (chocolateScore >= 3) {
    result.innerHTML = "Chocolate! You are full of energy and fun to be with and you always know how to make someone laugh!";
    console.log("Chocolate! You are full of energy and fun to be with and you always know how to make someone laugh!");
  }
  else if (vanillaScore >= 3) {
    result.innerHTML = "Vanilla! You are a sweet person with classic taste and mayhaps a love for perfection!";
    console.log("Vanilla! You are a sweet person with classic taste and mayhaps a love for perfection!");
  }
}

function restartTest() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  vanillaScore = 0;
  chocolateScore = 0;
  enableButtons();
}

//Disabling Buttons

function enableButtons() {
  q1a1.disabled = false;  
  q1a2.disabled = false;
  q2a1.disabled = false; 
  q2a2.disabled = false; 
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
  q5a3.disabled = false; 
  q5a4.disabled = false;
}

function disableQuestion1() 
{
  q1a1.disabled = true;
  q1a2.disabled = true;
}

function disableQuestion2() 
{
  q2a1.disabled = true;
  q2a2.disabled = true;
}

function disableQuestion3() 
{
  q3a1.disabled = true;
  q3a2.disabled = true;
}

function disableQuestion4() 
{
  q4a1.disabled = true;
  q4a2.disabled = true;
}

function disableQuestion5() 
{
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
}

q1a1.addEventListener("click", disableQuestion1);
q1a2.addEventListener("click", disableQuestion1);

q2a1.addEventListener("click", disableQuestion2);
q2a2.addEventListener("click", disableQuestion2);

q3a1.addEventListener("click", disableQuestion3);
q3a2.addEventListener("click", disableQuestion3);

q4a1.addEventListener("click", disableQuestion4);
q4a2.addEventListener("click", disableQuestion4);

q5a1.addEventListener("click", disableQuestion5);
q5a2.addEventListener("click", disableQuestion5);
q5a3.addEventListener("click", disableQuestion5);
q5a4.addEventListener("click", disableQuestion5);
