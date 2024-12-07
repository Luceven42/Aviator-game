let balance = 100;
let multiplier = 1.0;
let gameInterval;
let isCrashed = false;

// Mise à jour du solde
function updateBalance() {
  document.getElementById('balance').innerText = `Solde : $${balance}`;
}

// Démarrer le jeu
document.getElementById('start-btn').addEventListener('click', () => {
  const betInput = document.getElementById('bet');
  const bet = parseFloat(betInput.value);

  if (isNaN(bet) || bet <= 0 || bet > balance) {
    alert('Entrez une mise valide.');
    return;
  }

  balance -= bet;
  updateBalance();
  document.getElementById('cashout-btn').disabled = false;
  document.getElementById('message').innerText = '';
  multiplier = 1.0;
  isCrashed = false;

  // Augmenter le multiplicateur
  gameInterval = setInterval(() => {
    if (Math.random() < 0.1) {
      isCrashed = true;
      clearInterval(gameInterval);
      document.getElementById('message').innerText = 'L\'avion s\'est écrasé ! Vous avez perdu votre mise.';
      document.getElementById('cashout-btn').disabled = true;
    } else {
      multiplier = (multiplier + 0.1).toFixed(2);
      document.getElementById('multiplier').innerText = `x${multiplier}`;
    }
  }, 500);
});

// Retirer les gains
document.getElementById('cashout-btn').addEventListener('click', () => {
  if (isCrashed) return;

  clearInterval(gameInterval);
  const betInput = document.getElementById('bet');
  const bet = parseFloat(betInput.value);
  const winnings = (bet * multiplier).toFixed(2);

  balance += parseFloat(winnings);
  updateBalance();
  document.getElementById('message').innerText = `Vous avez retiré : $${winnings}`;
  document.getElementById('cashout-btn').disabled = true;
});
function updateMultiplierDisplay() {
  const multiplierElement = document.getElementById('multiplier');
  multiplierElement.innerText = `x${multiplier}`;
  multiplierElement.style.transform = 'scale(1.2)';
  multiplierElement.style.color = 'lime';

  setTimeout(() => {
    multiplierElement.style.transform = 'scale(1)';
    multiplierElement.style.color = 'white';
  }, 300);
}

// Remplace dans le jeu principal
gameInterval = setInterval(() => {
  if (Math.random() < 0.1) {
    isCrashed = true;
    clearInterval(gameInterval);
    document.getElementById('message').innerText = 'L\'avion s\'est écrasé ! Vous avez perdu votre mise.';
    document.getElementById('cashout-btn').disabled = true;
  } else {
    multiplier = (multiplier + 0.1).toFixed(2);
    updateMultiplierDisplay(); // Appel de l'animation
  }
}, 500);
// Charger les sons
const startSound = new Audio('sounds/start.mp3');
const crashSound = new Audio('sounds/crash.mp3');
const cashoutSound = new Audio('sounds/cashout.mp3');

// Ajouter les sons aux événements
document.getElementById('start-btn').addEventListener('click', () => {
  startSound.play(); // Jouer le son au début
  ...
});

if (isCrashed) {
  crashSound.play(); // Jouer le son du crash
}

document.getElementById('cashout-btn').addEventListener('click', () => {
  cashoutSound.play(); // Jouer le son du retrait
  ...
});
const scores = []; // Tableau des scores

function updateScoreboard(winnings) {
  scores.push(winnings);
  scores.sort((a, b) => b - a); // Trier les scores
  const scoresList = document.getElementById('scores-list');
  scoresList.innerHTML = scores.slice(0, 5).map(score => `<li>$${score}</li>`).join('');
}

// Appeler la mise à jour lors du retrait
document.getElementById('cashout-btn').addEventListener('click', () => {
  ...
  updateScoreboard(winnings); // Mettre à jour le tableau des scores
});
function updateMultiplierDisplay() {
  const multiplierElement = document.getElementById('multiplier');
  multiplierElement.innerText = `x${multiplier}`;
  multiplierElement.style.transform = 'scale(1.2)';
  multiplierElement.style.color = 'lime';

  setTimeout(() => {
    multiplierElement.style.transform = 'scale(1)';
    multiplierElement.style.color = 'white';
  }, 300);
}

// Utilise cette fonction dans le jeu principal
gameInterval = setInterval(() => {
  if (Math.random() < 0.1) {
    isCrashed = true;
    clearInterval(gameInterval);
    document.getElementById('message').innerText = 'L\'avion s\'est écrasé ! Vous avez perdu votre mise.';
    document.getElementById('cashout-btn').disabled = true;
  } else {
    multiplier = (multiplier + 0.1).toFixed(2);
    updateMultiplierDisplay();
  }
}, 500);
// Charger les sons
const startSound = new Audio('sounds/start.mp3');
const crashSound = new Audio('sounds/crash.mp3');
const cashoutSound = new Audio('sounds/cashout.mp3');

// Ajouter les sons aux événements
document.getElementById('start-btn').addEventListener('click', () => {
  startSound.play();
  ...
});

if (isCrashed) {
  crashSound.play();
}

document.getElementById('cashout-btn').addEventListener('click', () => {
  cashoutSound.play();
  ...
const scores = []; // Tableau des scores

function updateScoreboard(winnings) {
  scores.push(winnings);
  scores.sort((a, b) => b - a); // Trier les scores
  const scoresList = document.getElementById('scores-list');
  scoresList.innerHTML = scores.slice(0, 5).map(score => `<li>$${score}</li>`).join('');
}

// Appeler cette fonction lors du retrait
document.getElementById('cashout-btn').addEventListener('click', () => {
  ...
  updateScoreboard(winnings);
});
