document.getElementById("botonColor").addEventListener("click", function() {
    cambiarColorMain();
  });
  
  function cambiarColorMain() {
    let color = generarColorAleatorio();
    document.getElementById("main").style.backgroundColor = color;
  }
  
  function generarColorAleatorio() {
    let letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  function irAPaginaPokemon() {
    window.location.href = "juegopokeapi.html";
  }

function irAlogin() {
    window.location.href = "index.html";
} 
function irAInicio() {
  window.location.href = "iniciopokeapi.html";
} 
function irAPaginaJuego () {
  window.location.href = "wackatopo.html";
} 