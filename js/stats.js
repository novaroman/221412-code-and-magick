'use strict';

function getMaximum(array) {
    var maximum = array[0];

    for (var i = 0; i < array.length; i++) {
        maximum = Math.max(maximum, array[i]);
    }
    return maximum;
}

window.renderStatistics = function(ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.strokeRect(110, 20, 420, 270);
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'white';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';

    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);

    var initialX = 150;
    var initialY = 100;
    var width = 40;
    var indent = 90;

    var maxTime = getMaximum(times);

    for (var i = 0; i < times.length; i++) {
        if (names[i] === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
        }
        var heigth = times[i] / maxTime * 150;
        ctx.fillRect(
            initialX + indent * i,
            initialY - heigth + 150,
            width,
            heigth
        );
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillText(
            names[i],
            initialX + indent * i,
            initialY + 165
        );
        ctx.fillText(
            times[i].toFixed(0),
            initialX + indent * i,
            (initialY - 10) - heigth + 150
        );
    }
};
