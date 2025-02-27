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







