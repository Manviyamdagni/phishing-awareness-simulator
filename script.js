const scenarios = [
  {
    text: "⚠️ Your bank account is suspended. Click the link to verify.",
    phishing: true,
    explanation: "Urgency + suspicious action request."
  },
  {
    text: "Meeting rescheduled to 3 PM. Calendar updated.",
    phishing: false,
    explanation: "Normal internal communication."
  },
  {
    text: "🎁 You won a gift card! Claim it now.",
    phishing: true,
    explanation: "Too-good-to-be-true reward."
  }
];

let current = 0;
let score = 0;
let answered = false;

// 🔑 WAIT until HTML is loaded
window.onload = function () {
  loadScenario();
};

function loadScenario() {
  const scenarioText = document.getElementById("scenario");
  const feedback = document.getElementById("feedback");

  scenarioText.innerText = scenarios[current].text;
  feedback.innerText = "";
  answered = false;
}

function checkAnswer(userChoice) {
  const feedback = document.getElementById("feedback");
  const scoreText = document.getElementById("score");

  if (answered) return;
  answered = true;

  if (userChoice === scenarios[current].phishing) {
    feedback.style.color = "#22c55e";
    feedback.innerText = "✅ Correct! " + scenarios[current].explanation;
    score++;
    scoreText.innerText = "Score: " + score;
  } else {
    feedback.style.color = "#ef4444";
    feedback.innerText = "❌ Incorrect. " + scenarios[current].explanation;
  }
}

function nextScenario() {
  current = (current + 1) % scenarios.length;
  loadScenario();
}
