'use strict';
// Массивы
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// Генерируем рандомное число
var getRandomElement = function (elements) {
  return elements[Math.floor(Math.random() * elements.length)];
};

var similarWindow = document.querySelector('.setup');
similarWindow.classList.remove('hidden');

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
