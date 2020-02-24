'use strict';
(function () {
  var similarWindow = document.querySelector('.setup');

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
        name: getRandomElement(window.constants.WIZARD_NAMES) + ' ' + getRandomElement(window.constants.WIZARD_SURNAMES),
        coatColor: getRandomElement(window.constants.WIZARD_COAT_COLORS),
        eyesColor: getRandomElement(window.constants.WIZARD_EYES_COLORS)
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
})();
