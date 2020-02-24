'use strict';

(function () {
  var setupPlayer = document.querySelector('.setup-player');
  var setupWizardAppearance = setupPlayer.querySelector('.setup-wizard-appearance');

  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardCoat = document.querySelector('.wizard-coat');
  var setupFireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');
  var fireball = setupFireballWrap.querySelector('.setup-fireball');

  var wizardEyesColorInput = setupWizardAppearance.querySelector('input[name=eyes-color]');
  var wizardCoatColorInput = setupWizardAppearance.querySelector('input[name=coat-color]');
  var fireballColorInput = setupFireballWrap.querySelector('input[name=fireball-color');

  // Выбираем случайный элемент из массива и подставляем к нужным элементам
  var getRandomElement = function (elements) {
    return elements[Math.floor(Math.random() * elements.length)];
  };

  var changeColor = function (array, element, input) {
    var color = getRandomElement(array);
    element.style.fill = color;
    input.value = color;
  };

  // Смена цвета глаз при клике
  var onEyesClick = function () {
    changeColor(window.constants.WIZARD_EYES_COLORS, wizardEyes, wizardEyesColorInput);
  };

  // Смена цвета мантии при клике
  var onCoatClick = function () {
    changeColor(window.constants.WIZARD_COAT_COLORS, wizardCoat, wizardCoatColorInput);
  };

  // Смена цвета фаерболла при клике
  var onFireballClick = function () {
    var colorFireball = getRandomElement(window.constants.FIREBALL_COLORS);
    setupFireballWrap.style.backgroundColor = colorFireball;
    fireballColorInput.value = colorFireball;
  };

  wizardEyes.addEventListener('click', onEyesClick);
  wizardCoat.addEventListener('click', onCoatClick);
  fireball.addEventListener('click', onFireballClick);
})();
