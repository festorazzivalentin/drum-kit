function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    // audio
    if(!audio) return;
    audio.currentTime = 0; // solución reinicio  de audio al volver a presionar
    audio.play();

    // animación
    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);

function removeTransition(){
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const slider = document.querySelector('input[class="slider"]');
// slider.value = 25;
// console.dir(slider);

const audios = document.querySelectorAll('audio');

function changeAudioVolume(e){
    let sliderValue = parseInt(e.target.value) / 100;
    audios.forEach(audio => audio.volume = sliderValue);
}

slider.addEventListener('input', changeAudioVolume);
changeAudioVolume({ target: slider });

