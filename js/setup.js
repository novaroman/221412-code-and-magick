'use strict';

var WIZARDS_OPTIONS = {
  name: [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ],
  surname: [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ],
  coatColor: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ],
  eyesColor: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ]
}

var WIZARD_COUNT = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateWizard() {
  return {
    name: getRandomElement(WIZARDS_OPTIONS.name) + ' ' + getRandomElement(WIZARDS_OPTIONS.surname),
    coatColor: getRandomElement(WIZARDS_OPTIONS.coatColor),
    eyesColor: getRandomElement(WIZARDS_OPTIONS.eyesColor)
  };
}

function createDomWizard(wizard, similarWizardTemplate) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARD_COUNT; i++) {
  var wizard = generateWizard();
  fragment.appendChild(createDomWizard(wizard, similarWizardTemplate));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
