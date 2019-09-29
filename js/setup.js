'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var SHOWN_WIZARDS = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomInt = function (max) {
  return Math.floor(Math.random() * (max + 1));
};

var createWizards = function () {
  var wizards = [];
  for (var i = 0; i < SHOWN_WIZARDS; i++) {
    wizards.push({
      name: WIZARD_NAMES[getRandomInt(WIZARD_NAMES.length - 1)] + ' ' + WIZARD_SURNAMES[getRandomInt(WIZARD_SURNAMES.length - 1)],
      coatColor: WIZARD_COAT_COLORS[getRandomInt(WIZARD_COAT_COLORS.length - 1)],
      eyesColor: WIZARD_EYES_COLORS[getRandomInt(WIZARD_EYES_COLORS.length - 1)]
    });
  }
  return wizards;
};

var wizards = createWizards();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

wizards.forEach(function (wizard) {
  fragment.appendChild(renderWizard(wizard));
});

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
