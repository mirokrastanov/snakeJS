import { ctx, width, height, hSize, vSize, rectSize, snake, speed, tail } from './app.js';

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
    clear: function () {
        ctx.clearRect(0, 0, width, height);
    },
    drawRect: function (x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * rectSize, y * rectSize, rectSize, rectSize);
    },
    start: function () {
        setInterval(game.main, 100); 
    },
    tick: function () {
        tail.x = snake.x;
        tail.y = snake.y;
        snake.y += speed.y;
        snake.x += speed.x;
        if (snake.y == -1) snake.y = vSize - 1;
        if (snake.y == vSize) snake.y = 0;
        if (snake.x == -1) snake.x = hSize - 1;
        if (snake.x == hSize) snake.x = 0;
    },
    drawScene: function () {
        game.clear();
        game.drawGrid();
        game.drawRect(snake.x, snake.y, 'purple');
        game.drawRect(tail.x, tail.y, 'green');
    },
    main: function () {
        game.tick();
        game.drawScene();
    },

}