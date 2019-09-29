'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT_MAX = 150;
var FONT_GAP = 10;

var fontY = CLOUD_Y + CLOUD_HEIGHT - FONT_GAP;
var barDownY = fontY - FONT_GAP - 10;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {

  if (arr.length === 0) {
    return 1;
  }

  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 20);
  ctx.fillText('Список результатов', CLOUD_X + 20, CLOUD_Y + 40);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'bottom';
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, fontY);


    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(218, ' + Math.random() * 100 + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, barDownY - BAR_HEIGHT_MAX * times[i] / maxTime, BAR_WIDTH, BAR_HEIGHT_MAX * times[i] / maxTime);

    ctx.fillStyle = '#000';
    ctx.textBaseline = 'hanging';
    ctx.fillText(Math.ceil(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, barDownY - BAR_HEIGHT_MAX * times[i] / maxTime - 20);
  }
};
