// correto, entretanto estou seguindo a aula do site da alura
//how to implement the fuction bellow in the code html?
// document.addEventListener('keydown', function(e) {
// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`);
//   if (!audio) return;
//   audio.currentTime = 0;
//   audio.play();
//   key.classList.add('tecla_pom');
// }


function playSound(seletorAudio) {

    const elemento = document.querySelector(seletorAudio)
    
  if (elemento !== null && elemento.localName === 'audio') {
      console.log(elemento.localName);
      elemento.play();

    } else {
      console.log('Elemento não é um audio');
      return;
    }

    console.log('tocou')
}

document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

const idElementoAudio = '#som_tecla_tic'

listaDeTeclas.forEach(tecla => {
    let instrumento = tecla.classList[1];

    instrumento = `#som_${instrumento}`;	

    // console.log(instrumento);
    
    tecla.addEventListener('click', function() {
        
        playSound(instrumento);
    });
    
    tecla.onkeydown = function (evento) {
        console.log(evento.code);
        if (evento.code === "Enter" || evento.code === "Space" || evento.code === "NumpadEnter") {
        tecla.classList.add('ativa');
        }
      }
      tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
      }



});