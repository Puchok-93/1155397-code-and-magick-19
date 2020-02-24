'use strict';

(function () {
  var similarWindow = document.querySelector('.setup');
  var avataUpload = similarWindow.querySelector('.upload');

  avataUpload.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCursor = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCursor.x - moveEvt.clientX,
        y: startCursor.y - moveEvt.clientY
      };

      startCursor = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      similarWindow.style.top = (similarWindow.offsetTop - shift.y) + 'px';
      similarWindow.style.left = (similarWindow.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          avataUpload.removeEventListener('click', onClickPreventDefault);
        };

        avataUpload.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
