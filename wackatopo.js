document.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.getElementById('gameContainer');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const timeLeftDisplay = document.getElementById('timeLeft');
  const scoreDisplay = document.getElementById('score');
  let score = 0;
  let timeLeft = 30;
  let timerId;

  startBtn.addEventListener('click', startGame);
  restartBtn.addEventListener('click', restartGame);

  function startGame() {
      score = 0;
      timeLeft = 30;
      scoreDisplay.textContent = score;
      timeLeftDisplay.textContent = timeLeft;

      startBtn.disabled = true;
      restartBtn.disabled = false;

      timerId = setInterval(moveMole, 1000);

      setTimeout(() => {
          clearInterval(timerId);
          startBtn.disabled = false;
          restartBtn.disabled = true;
          alert('¡Se acabó el tiempo! Tu puntuación final es: ' + score);
      }, 30000);

      createMole();
  }

  function restartGame() {
      clearInterval(timerId);
      startBtn.disabled = false;
      restartBtn.disabled = true;
      alert('Juego reiniciado');
  }

  function createMole() {
      gameContainer.innerHTML = '';
      const mole = document.createElement('div');
      mole.classList.add('mole');
      mole.textContent = '👾';
      mole.addEventListener('click', bonk);
      gameContainer.appendChild(mole);
  }

  function moveMole() {
      const mole = document.querySelector('.mole');
      mole.style.gridRow = Math.floor(Math.random() * 3) + 1;
      mole.style.gridColumn = Math.floor(Math.random() * 4) + 1;
  }

  function bonk() {
      score++;
      scoreDisplay.textContent = score;
      this.parentNode.removeChild(this);
      createMole();
  }
});
function irAPaginaPokemon() {
    window.location.href = "iniciopokeapi.html";
  }
  
  function irAlogin() {
    window.location.href = "index.html";
  } 
  function irAInicio() {
    window.location.href = "iniciopokeapi.html";
  } 