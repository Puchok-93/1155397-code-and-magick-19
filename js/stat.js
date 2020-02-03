'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var HISTOGRAM_HEIGTH = 150;
var HISTOGRAM_X = 150;
var HISTOGRAM_Y = 245;
var COLUMN_MARGIN = 90;
var COLUMN_WIDTH = 40;
var COLUMN_REVERSE = -1;
var LINE_HEIGHT = 20;
var USER_COLOR = 'rgba(255, 0, 0, 1)';
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

// Определение цвета
var getPlayerColor = function (playerName) {
  return (playerName === 'Вы') ? USER_COLOR : 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%';
};

// Определение максимального значения

var getMaxValue = function (values) {
  var maxValue = 0;
  for (var i = 0; i < values.length; i++) {
    if (values[i] > maxValue) {
      maxValue = values[i];
    }
  }
  return maxValue;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // Отрисовка текста

  ctx.fillStyle = '#000';
  ctx.font = '16px Tahoma';
  ctx.fillText('Ура вы победили!', 135, 35);
  ctx.fillText('Список результатов:', 135, 60);

  // Построение гистограммы
  var maxTime = getMaxValue(times);

  for (var size = 0; size < times.length; size++) {
    var playerTime = Math.round(times[size]);
    var columnHeight = playerTime * HISTOGRAM_HEIGTH / maxTime;

    ctx.fillStyle = getPlayerColor(names[size]);
    ctx.fillRect(HISTOGRAM_X + size * COLUMN_MARGIN, HISTOGRAM_Y, COLUMN_WIDTH, columnHeight * COLUMN_REVERSE);

    ctx.fillStyle = '#000000';
    ctx.fillText(playerTime, HISTOGRAM_X + size * COLUMN_MARGIN, HISTOGRAM_Y - columnHeight - LINE_HEIGHT / 2);
    ctx.fillText(names[size], HISTOGRAM_X + size * COLUMN_MARGIN, HISTOGRAM_Y + LINE_HEIGHT);
  }
};
