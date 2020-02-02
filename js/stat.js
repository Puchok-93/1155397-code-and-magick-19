var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

 /*Определение цвета*/

 var getPlayerColor = function (playerName) {
  if (playerName === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  } else {
    return 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%';
  }
};

  /*Определение максимального значения*/

  var getMaxValue = function (anyArray) {
    var maxValue = 0;

    for (var i= 0; i < anyArray.length; i++) {
      if (anyArray[i] > maxValue) {
        maxValue = anyArray[i];
      }
    }
    return maxValue;
  };

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  /*Отрисовка текста*/

  ctx.fillStyle = '#000';
  ctx.font = '16px Tahoma';
  ctx.fillText('Ура вы победили!', 135, 35);
  ctx.fillText('Список результатов:', 135, 60);

  /*Построение гистограммы*/

  var HISTOGRAM_HEIGTH = 150;
  var HISTOGRAM_X = 150;
  var HISTOGRAM_Y = 245;
  var COLUMN_MARGIN = 90;
  var COLUMN_WIDTH = 40;
  var COLUMN_REVERSE = -1;
  var LINEHEIGHT = 20;
  var maxTime = getMaxValue(times);

  for (j = 0; j < times.length; j++) {
    var playerTime = Math.round(times[j]);
    var columnHeight = playerTime * HISTOGRAM_HEIGTH / maxTime;

    ctx.fillStyle = getPlayerColor(names[j]);
    ctx.fillRect(HISTOGRAM_X + j * COLUMN_MARGIN, HISTOGRAM_Y, COLUMN_WIDTH, columnHeight * COLUMN_REVERSE);

    ctx.fillStyle = '#000000';
    ctx.fillText(playerTime, HISTOGRAM_X + j * COLUMN_MARGIN, HISTOGRAM_Y - columnHeight - LINEHEIGHT / 2);
    ctx.fillText(names[j], HISTOGRAM_X + j * COLUMN_MARGIN, HISTOGRAM_Y + LINEHEIGHT);
  }
};
