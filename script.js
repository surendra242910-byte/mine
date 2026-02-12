// CHANGE THIS DATE & TIME TO YOUR PROPOSAL MOMENT
const proposalDate = new Date("2025-04-11T23:30:00");

function updateTimer() {
  const now = new Date();
  const diff = now - proposalDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  document.getElementById("timer").innerText =
    `${days} days 💕 ${remainingHours} hours ⏰ ${remainingMinutes} minutes ⌛ ${remainingSeconds} seconds ❤️`;
}

setInterval(updateTimer, 1000);
updateTimer();

function showSurprise() {
  document.getElementById("surprise-text").innerText =
    "Ah roju endhuku thaginano nak telidhu but that is the best decision I ever took in my life till now and I luvv uuu soooo muchhhh😘 You are my favorite notification, my forever person, and my daily smile 😘💖";
}

const pics = [
  {
    src: "images/her-good.jpg",
    btn: "I like you when you look like this😍 but Click me",
    caption: "My heart skips a beat every time ❤️"
  },
  {
    src: "images/her-funny1.jpg",
    btn: "I like you even more when you look like this🤭 Okay… next one 😂 Click me",
    caption: "Still cute, just extra chaos 😜"
  },
  {
    src: "images/her-funny2.jpg",
    btn: "Wait, there’s more 🤣 Click me",
    caption: "How are you THIS adorable?"
  },
  {
    src: "images/her-funny3.jpg",
    btn: "Back to cute mode 😇",
    caption: "I fell in love with ALL versions 💕"
  }
];

const heartContainer = document.createElement("div");
heartContainer.className = "watermark-hearts";
document.body.appendChild(heartContainer);

for (let i = 0; i < 80; i++) {
  const heart = document.createElement("span");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = Math.random() * 200 + "vh";
  heartContainer.appendChild(heart);
}
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";
  heart.style.fontSize = 12 + Math.random() * 12 + "px";
  heart.style.opacity = 0.2 + Math.random() * 0.3;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

// create hearts continuously
setInterval(createHeart, 400);


let currentIndex = 0;

function changeHerPic() {
  currentIndex = (currentIndex + 1) % pics.length;

  document.getElementById("herPic").src = pics[currentIndex].src;
  document.getElementById("toggleBtn").innerText = pics[currentIndex].btn;
  document.getElementById("picCaption").innerText = pics[currentIndex].caption;
}

function sayYes() {
  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.volume = 0.5; // soft romantic volume
  music.play();
}


/*
function sayYes() {
  document.getElementById("homeScreen").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");
}
/*
const noBtn = document.getElementById("noBtn");

let noClickCount = 0;

const messages = [
  "Are you sure? 😏",
  "Think again 🤔"
];

noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount <= 2) {
    noBtn.innerText = messages[noClickCount - 1];
  } else {
    noBtn.innerText = "Oops… you no longer have this option 😌🤭";
    noBtn.classList.add("disabled");
    noBtn.disabled = true;
  }
});
*/

const noBtn = document.getElementById("noBtn");
const panda = document.getElementById("panda");

let noClickCount = 0;

const messages = [
  "Are you sure? 😏",
  "Think again 🤔"
];

noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount <= 2) {
    noBtn.innerText = messages[noClickCount - 1];
  } else {
  // Final message
  noBtn.innerText = "Oops… you no longer have this option 😌🤭";
  noBtn.disabled = true;

  // Panda enters
  panda.style.left = "40%";

  // Panda waves
  panda.classList.add("waving");

  // Panda takes the button and leaves
  setTimeout(() => {
    noBtn.style.display = "none";
    panda.classList.remove("waving");
    panda.classList.add("panda-walk");
  }, 1800);
}

});
