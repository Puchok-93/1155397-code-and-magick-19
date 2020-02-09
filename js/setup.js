var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var randomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [
  {
    name: randomElement(wizardName) + ' ' + randomElement(wizardSurname),
    coatColor: randomElement(coatColor),
    eyesColor: randomElement(eyesColor)
  },
  {
    name: randomElement(wizardName) + ' ' + randomElement(wizardSurname),
    coatColor: randomElement(coatColor),
    eyesColor: randomElement(eyesColor)
  },
  {
    name: randomElement(wizardName) + ' ' + randomElement(wizardSurname),
    coatColor: randomElement(coatColor),
    eyesColor: randomElement(eyesColor)
  },
  {
    name: randomElement(wizardName) + ' ' + randomElement(wizardSurname),
    coatColor: randomElement(coatColor),
    eyesColor: randomElement(eyesColor)
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
