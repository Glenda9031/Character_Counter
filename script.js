const container = document.querySelector('.container');
const toggleMode = document.querySelector('.toggle-mode');
const toggleModeIcon = document.querySelector('.toggle-mode__icon');
const logoIcon = document.querySelector('.logo__icon');

const info = document.querySelector('.info');

const textArea = document.getElementById('textarea-custom');
const excludeSpaces = document.getElementById('exclude-spaces');
const characterLimit = document.getElementById('character-limit');

const includeSpacesText = document.querySelector('.counter__sub-title-spaces');
const readingTimeCounter = document.querySelector('.reading-time__counter');

const counterCharacters = document.querySelector('.counter__characters');
const counterWords = document.querySelector('.counter__words');
const counterSentences = document.querySelector('.counter__sentences');
const characterLimitInput = document.querySelector('.counter-character__input');
const maxChars = document.querySelector('.max-characters');
const noChars = document.querySelector('.no-characters');

const densityContainer = document.querySelector('.density__container');

const charactersList = {}
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

let totalCharacters = 0;
let totalWords = 0;
let totalSentences = 0;
let charactersLimit = 0;

for (let char of alphabet) {
  charactersList[char] = 0;
}

function displayLettersDensity(totalLetters) {
  let entries = Object.entries(charactersList);
  entries.sort((a, b) => b[1] - a[1]);
}

let densityHTML = '';
let extraDensityHTML = '';

entries.forEach(([key, value], index) => {
  if (value > 0) {
    let percentage = 
      totalLetters > 0 ? ((value / totalLetters) * 100).toFixed(2) : 0;
    let elementHTML = `
      <div class="density__element">
        <span class="letter text-preset-4">key${key.toUpperCase()}</span>
        <progress class="progress-bar" value="${value}" max="${totalLetters}"></progress>
        <span class="density__number text-preset-4">${value}</span>&nbsp;
        <span class="density__percentage text-preset-4">${percentage}%</span>
      </div>`;
      
      if (index < 5) densityHTML += elementHTML;
      else extraDensityHTML += elementHTML;
  }
});

densityContainer.innerHTML = densityHTML;

if (extraDensityHTML) {
  let seeMore = document.createElement("p");
  seeMore.textContent = "See more v";
  seeMore.classList.add("text-preset-3", "show-more");

  let seeLess = document.createElement("p");
  seeLess.textContent = "See less ^";
  seeLess.classList.add("text-preset-3", "show-less");
  seeLess.style.display = "none";  
}





