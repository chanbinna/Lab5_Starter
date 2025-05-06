// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti()
  const hornImage = document.querySelector('#expose img');
  const audio = document.querySelector('audio');


  const hornSelect = document.getElementById('horn-select');
  hornSelect.addEventListener('change', function () {
    const selectedHorn = hornSelect.value;

    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornImage.alt = selectedHorn;
    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  const volumeIcon = document.querySelector('#volume-controls img');
  const volumeSlider = document.getElementById('volume');
  volumeSlider.addEventListener('input', function () {
    const volumeLevel = volumeSlider.value;
    audio.volume = volumeLevel / 100;

    if (volumeLevel == 0) {
      volumeIcon.src = `assets/icons/volume-level-0.svg`;
      volumeIcon.alt = 'Volume Level 0';
    }
    else if (volumeLevel < 33) {
      volumneIcon.src = `assets/icons/volume-level-1.svg`;
      volumeIcon.alt = 'Volume Level 1';
    }
    else if (volumeLevel < 67) {
      volumeIcon.src = `assets/icons/volume-level-2.svg`;
      volumeIcon.alt = 'Volume Level 2';
    }
    else {
      volumeIcon.src = `assets/icons/volume-level-3.svg`;
      volumeIcon.alt = 'Volume Level 3';
    }
  });


  const playButton = document.querySelector('#expose button');
  playButton.addEventListener('click', function () {
    audio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

}