const scenarios = [
  {
    text: "⚠️ Your bank account is suspended. Click the link to verify immediately.",
    phishing: true,
    explanation: "Creates urgency and asks for immediate action via a link."
  },
  {
    text: "Your OTP is 839201. Do not share this code with anyone.",
    phishing: false,
    explanation: "OTP message without a link or action request."
  },
  {
    text: "🎁 You’ve won a free gift card! Claim within 24 hours.",
    phishing: true,
    explanation: "Too-good-to-be-true reward with time pressure."
  },
  {
    text: "HR Update: Please review the revised company leave policy attached.",
    phishing: false,
    explanation: "Normal workplace communication with no suspicious links."
  },
  {
    text: "Your Netflix payment failed. Update billing details now.",
    phishing: true,
    explanation: "Fake service alert designed to steal payment info."
  },
  {
    text: "Meeting moved to 4 PM today. Calendar invite updated.",
    phishing: false,
    explanation: "Routine internal update."
  },
  {
    text: "Security Alert: Unusual login detected. Verify your account.",
    phishing: true,
    explanation: "Vague security warning pushing user to click."
  },
  {
    text: "Amazon: Your order has been shipped and will arrive tomorrow.",
    phishing: false,
    explanation: "Informational message with no urgent action."
  },
  {
    text: "Your email storage is full. Click here to increase quota.",
    phishing: true,
    explanation: "Common phishing tactic targeting email users."
  },
  {
    text: "Reminder: Project deadline is Friday. Please submit your report.",
    phishing: false,
    explanation: "Simple reminder without malicious intent."
  },
  {
    text: "We noticed suspicious activity. Login to secure your account.",
    phishing: true,
    explanation: "Generic message lacking specific details."
  },
  {
    text: "Your train ticket has been confirmed. Happy journey!",
    phishing: false,
    explanation: "Confirmation message with no threat or urgency."
  },
  {
    text: "⚠️ Income tax refund pending. Submit details to receive funds.",
    phishing: true,
    explanation: "Financial lure asking for personal information."
  },
  {
    text: "Class schedule updated. Please check the student portal.",
    phishing: false,
    explanation: "Normal academic communication."
  },
  {
    text: "WhatsApp account will be deactivated. Verify now.",
    phishing: true,
    explanation: "Fear-based message pressuring quick action."
  },
  {
    text: "Password changed successfully. If this wasn’t you, contact support.",
    phishing: false,
    explanation: "Informational security notification."
  },
  {
    text: "Exclusive offer just for you! Click to unlock rewards.",
    phishing: true,
    explanation: "Marketing-style bait with no clear source."
  },
  {
    text: "Your package is delayed due to address issues.",
    phishing: true,
    explanation: "Delivery scam prompting users to click links."
  },
  {
    text: "Team lunch scheduled for Friday at 1 PM.",
    phishing: false,
    explanation: "Casual internal message."
  },
  {
    text: "Google Alert: New sign-in from unknown device.",
    phishing: true,
    explanation: "Impersonation of trusted brand to scare users."
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

