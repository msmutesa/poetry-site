// Like counter
function addLike(button) {
  const span = button.querySelector("span");
  span.textContent = parseInt(span.textContent) + 1;
}

// Comments
function addComment(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  if (!input.value.trim()) return;
  const li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);
  input.value = "";
}

// Reactions
function addReaction(button, emoji) {
  button.textContent = emoji + " " + ((parseInt(button.dataset.count) || 0) + 1);
  button.dataset.count = (parseInt(button.dataset.count) || 0) + 1;
}

// Poem submission
function submitPoem() {
  let poemText = document.getElementById("newPoem").value.trim();
  if (poemText === "") return;

  // Split poem into lines
  let lines = poemText.split("\n");

  // Create poem display
  let poemItem = document.createElement("li");
  poemItem.innerHTML = lines.map(line => line.trim() !== "" ? line + "<br>" : "").join("");
  
  document.getElementById("submitted-poems").appendChild(poemItem);

  document.getElementById("newPoem").value = ""; // clear textarea
}


// Poem of the day
const poems = [
  "🌞 Dawn whispers secrets of hope.",
  "🌊 The ocean sings in silent waves.",
  "🌙 Moonlight dreams in silver hues."
];
document.getElementById("random-poem").textContent = poems[Math.floor(Math.random() * poems.length)];

// Quotes
const quotes = [
  "Poetry is the rhythmical creation of beauty in words. – Edgar Allan Poe",
  "A poet is, before anything else, a person who is passionately in love with language. – W.H. Auden",
  "Poetry is when an emotion has found its thought and the thought has found words. – Robert Frost"
];
function newQuote() {
  document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];
}
newQuote();

// Visitor counter (local storage)
let count = localStorage.getItem("visits") || 0;
count++;
localStorage.setItem("visits", count);
document.getElementById("visitor-count").textContent = count;

// Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Falling petals animation
const canvas = document.getElementById("petals");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let petals = Array.from({length: 20}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 5 + 2,
  d: Math.random() + 1
}));
function drawPetals() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "pink";
  ctx.beginPath();
  for (let p of petals) {
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
  }
  ctx.fill();
  updatePetals();
}
function updatePetals() {
  for (let p of petals) {
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  }
}
setInterval(drawPetals, 33);
