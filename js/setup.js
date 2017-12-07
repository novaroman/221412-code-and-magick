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
  ],
  fireballColor: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ],
}

var WIZARD_COUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// События.

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var userDialogSave = setup.querySelector('.setup-submit');
var userName = setup.querySelector('.setup-user-name');
var wizardCoatColor = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyesColor = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireballColor = setup.querySelector('.setup-fireball-wrap');

// Открытие/закрытие окна настройки персонажа.

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE && userName !== document.activeElement) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

//Отправка формы.

userDialogSave.addEventListener('click', function() {
  closePopup();
});

userDialogSave.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

//Изменение цвета мантии персонажа по нажатию.

wizardCoatColor.addEventListener('click', function() {
  wizardCoatColor.style.fill = getRandomElement(WIZARDS_OPTIONS.coatColor);
});

//Изменение цвета глаз персонажа по нажатию.

wizardEyesColor.addEventListener('click', function() {
  wizardEyesColor.style.fill = getRandomElement(WIZARDS_OPTIONS.eyesColor);
});

//Изменение цвета фаерболов по нажатию.

wizardFireballColor.addEventListener('click', function() {
  wizardFireballColor.style.background = getRandomElement(WIZARDS_OPTIONS.fireballColor);
});


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
