'use strict';
// Массивы
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// ------------------------------------------Настройка персонажа / Обработка событий------------------------------------------

// Избавляемся от магических чисел
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var similarWindow = document.querySelector('.setup');
var similarWindowOpen = document.querySelector('.setup-open');
var similarWindowClose = similarWindow.querySelector('.setup-close');
var similarWindowUserName = similarWindow.querySelector('.setup-user-name');

var setupPlayer = document.querySelector('.setup-player');
var setupWizardAppearance = setupPlayer.querySelector('.setup-wizard-appearance');

var wizardEyes = document.querySelector('.wizard-eyes');
var wizardCoat = document.querySelector('.wizard-coat');
var setupFireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');
var fireball = setupFireballWrap.querySelector('.setup-fireball');

var wizardEyesColorInput = setupWizardAppearance.querySelector('input[name=eyes-color]');
var wizardCoatColorInput = setupWizardAppearance.querySelector('input[name=coat-color]');
var fireballColorInput = setupFireballWrap.querySelector('input[name=fireball-color');

var onUserNameFocus = function () {
  document.removeEventListener('keydown', onSimilarWindowEscPress);
};

var onUserNameBlur = function () {
  document.addEventListener('keydown', onSimilarWindowEscPress);
};

// Выбираем случайный элемент из массива и подставляем к нужным элементам
var changeColor = function (array, element, input) {
  var color = getRandomElement(array);
  element.style.fill = color;
  input.value = color;
};

// Смена цвета глаз при клике
var onEyesClick = function () {
  changeColor(WIZARD_EYES_COLORS, wizardEyes, wizardEyesColorInput);
};

// Смена цвета мантии при клике
var onCoatClick = function () {
  changeColor(WIZARD_COAT_COLORS, wizardCoat, wizardCoatColorInput);
};

// Смена цвета фаерболла при клике
var onFireballClick = function () {
  var colorFireball = getRandomElement(FIREBALL_COLORS);
  setupFireballWrap.style.backgroundColor = colorFireball;
  fireballColorInput.value = colorFireball;
};


var onSimilarWindowEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closeSimilarWindow();
  }
};

similarWindowOpen.addEventListener('click', function () {
  openSimilarWindow();
});

similarWindowOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    similarWindow.classList.remove('hidden');
  }
});

similarWindowClose.addEventListener('click', function () {
  closeSimilarWindow();
});

similarWindowClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    similarWindow.classList.add('hidden');
  }
});

var openSimilarWindow = function () {
  similarWindow.classList.remove('hidden');
  document.addEventListener('keydown', onSimilarWindowEscPress);
  similarWindowUserName.addEventListener('focusin', onUserNameFocus);
  similarWindowUserName.addEventListener('focusout', onUserNameBlur);
  wizardEyes.addEventListener('click', onEyesClick);
  wizardCoat.addEventListener('click', onCoatClick);
  fireball.addEventListener('click', onFireballClick);
};

var closeSimilarWindow = function () {
  similarWindow.classList.add('hidden');
  document.removeEventListener('keydown', onSimilarWindowEscPress);
  similarWindowUserName.removeEventListener('focusin', onUserNameFocus);
  similarWindowUserName.removeEventListener('focusout', onUserNameBlur);
  wizardEyes.removeEventListener('click', onEyesClick);
  wizardCoat.removeEventListener('click', onCoatClick);
  fireball.removeEventListener('click', onFireballClick);
};

// ------------------------------------------Настройка персонажа / Обработка событий------------------------------------------
// Генерируем рандомное число
var getRandomElement = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
};

var similarListElement = similarWindow.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// Генерируем случайного мага
var getRandomWizard = function () {
  var randomWizard =
    {
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(WIZARD_COAT_COLORS),
      eyesColor: getRandomElement(WIZARD_EYES_COLORS)
    };

  return randomWizard;
};

// Генерируем массив с магами
var getWizardsArr = function (number) {
  var wizards = [];

  for (var i = 0; i < number; i++) {
    wizards.push(getRandomWizard());
  }

  return wizards;
};

var createWizards = getWizardsArr(4);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < createWizards.length; i++) {
    fragment.appendChild(renderWizard(createWizards[i]));
  }

  return fragment;
};
similarListElement.appendChild(getFragment());

similarWindow.querySelector('.setup-similar').classList.remove('hidden');

// ------------------------------------------Настройка персонажа / Обработка событий------------------------------------------
