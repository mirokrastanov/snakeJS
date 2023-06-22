import { ctx, width, height, hSize, vSize, rectSize, snake } from './app.js';

export const game = {
    drawGrid: function () {
        ctx.strokeStyle = '#999999';
        ctx.beginPath();

        for (let x = 1; x < hSize; x++) {
            ctx.moveTo(x * rectSize, 0);
            ctx.lineTo(x * rectSize, height);
        }

        for (let y = 1; y < vSize; y++) {
            ctx.moveTo(0, y * rectSize);
            ctx.lineTo(width, y * rectSize);
        }

        ctx.closePath();
        ctx.stroke();
    },
    clearGrid: function () {
        ctx.clearRect(0, 0, width, height);
    },
    drawRect: function (x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * rectSize, y * rectSize, rectSize, rectSize);
    },
    startGame: function () {
        setInterval(game.drawScene, 100); // draws the scene every 100ms
    },
    drawScene: function () {
        game.clearGrid();
        game.drawGrid();
        game.drawRect(snake.x, snake.y, 'purple');
    },

}