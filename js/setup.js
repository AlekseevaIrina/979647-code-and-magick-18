'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALLS_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var SHOWN_WIZARDS = 4;

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');

var wizardCoat = userDialog.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = userDialog.querySelector('.setup-wizard .wizard-eyes');
var fireball = userDialog.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

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

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = WIZARD_COAT_COLORS[getRandomInt(WIZARD_COAT_COLORS.length - 1)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = WIZARD_EYES_COLORS[getRandomInt(WIZARD_EYES_COLORS.length - 1)];
});

fireball.addEventListener('click', function () {
  fireball.style.background = WIZARD_FIREBALLS_COLORS[getRandomInt(WIZARD_FIREBALLS_COLORS.length - 1)];
});
