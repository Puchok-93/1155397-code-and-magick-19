'use strict';

(function () {
  var similarWindow = document.querySelector('.setup');
  var similarWindowOpen = document.querySelector('.setup-open');
  var similarWindowClose = similarWindow.querySelector('.setup-close');
  var similarWindowUserName = similarWindow.querySelector('.setup-user-name');

  var onUserNameFocus = function () {
    document.removeEventListener('keydown', onSimilarWindowEscPress);
  };

  var onUserNameBlur = function () {
    document.addEventListener('keydown', onSimilarWindowEscPress);
  };

  var onSimilarWindowEscPress = function (evt) {
    if (evt.key === window.constants.ESC_KEY) {
      closeSimilarWindow();
    }
  };

  similarWindowOpen.addEventListener('click', function () {
    openSimilarWindow();
  });

  similarWindowOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      similarWindow.classList.remove('hidden');
    }
  });

  similarWindowClose.addEventListener('click', function () {
    closeSimilarWindow();
  });

  similarWindowClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.constants.ENTER_KEY) {
      similarWindow.classList.add('hidden');
    }
  });

  var openSimilarWindow = function () {
    similarWindow.classList.remove('hidden');
    document.addEventListener('keydown', onSimilarWindowEscPress);
    similarWindowUserName.addEventListener('focusin', onUserNameFocus);
    similarWindowUserName.addEventListener('focusout', onUserNameBlur);
  };

  var closeSimilarWindow = function () {
    similarWindow.classList.add('hidden');
    document.removeEventListener('keydown', onSimilarWindowEscPress);
    similarWindowUserName.removeEventListener('focusin', onUserNameFocus);
    similarWindowUserName.removeEventListener('focusout', onUserNameBlur);
  };
})();
