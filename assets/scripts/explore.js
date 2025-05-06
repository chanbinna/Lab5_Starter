// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const selectVoice = document.getElementById("voice-select");
  const textInput = document.getElementById("text-to-speak");
  const talkButton = document.querySelector("#explore button");
  const yourFace = document.querySelector("#explore img");

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      selectVoice.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener("click", () => {
    yourFace.src = "assets/images/smiling-open.png";
    yourFace.alt = "Smiling open face";

    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption =
      selectVoice.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.onend = () => {
      yourFace.src = "assets/images/smiling.png";
      yourFace.alt = "Smiling face";
    };

    synth.speak(utterThis);
    textInput.blur();
  });
}
