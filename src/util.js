import { ctx, width, height, hSize, vSize, rectSize, snake, speed, tail, apple } from './app.js';

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
        ctx.fillRect(x * rectSize + 1, y * rectSize + 1, rectSize - 2, rectSize - 2);
    },
    start: function () {
        setInterval(game.main, 100);
    },
    tick: function () {
        tail.segments.push({ x: snake.x, y: snake.y });
        while (tail.segments.length > tail.size) tail.segments.shift();
        snake.y += speed.y;
        snake.x += speed.x;
        if (snake.y == -1) snake.y = vSize - 1;
        if (snake.y == vSize) snake.y = 0;
        if (snake.x == -1) snake.x = hSize - 1;
        if (snake.x == hSize) snake.x = 0;
        if (snake.x == apple.x && snake.y == apple.y) tail.size++;
    },
    drawScene: function () {
        game.clear();
        game.drawGrid();
        game.drawRect(snake.x, snake.y, 'purple');
        tail.segments.forEach(seg => game.drawRect(seg.x, seg.y, 'green'));
        game.drawRect(apple.x, apple.y, 'red');
    },
    main: function () {
        game.tick();
        game.drawScene();
    },

}