import { ctx, width, height, hSize, vSize, rectSize, snake, speed, tail, apple } from './app.js';

let interval = null;

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
        if (interval != null) clearInterval(interval);
        snake.x = 10;
        snake.y = 10;
        tail.segments.length = 0;
        tail.size = 3;
        speed.x = 1;
        speed.y = 0;

        game.spawnApple();
        interval = setInterval(game.main, 100);
    },
    tick: function () {
        game.updateScore();
        tail.segments.push({ x: snake.x, y: snake.y });
        while (tail.segments.length > tail.size) tail.segments.shift();
        snake.y += speed.y;
        snake.x += speed.x;
        if (snake.y == -1) snake.y = vSize - 1;
        if (snake.y == vSize) snake.y = 0;
        if (snake.x == -1) snake.x = hSize - 1;
        if (snake.x == hSize) snake.x = 0;

        tail.segments.forEach(seg => {
            if (seg.x == snake.x && seg.y == snake.y) game.gameOver();
        });

        if (snake.x == apple.x && snake.y == apple.y) {
            tail.size++;
            game.spawnApple();
        }
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
    spawnApple: function () {
        apple.x = Math.floor(Math.random() * hSize);
        apple.y = Math.floor(Math.random() * vSize);
        tail.segments.forEach(seg => {
            if (seg.x == apple.x && seg.y == apple.y) game.spawnApple();
        });
    },
    gameOver: function () {
        clearInterval(interval);
        const choice = confirm(`Game Over!\nYour Score: ${(tail.size - 3) * 1000}\n\nPlay Again?`);
        if (choice == true) return game.start();
        else if (choice == false) return game.genEndScreen();
    },
    genEndScreen: function () {
        let button = document.querySelector('#end-btn');
        button.style.display = 'block';
        button.addEventListener('click', (e) => {
            game.start();
            button.style.display = 'none';
        });
    },
    updateScore: function () {
        let score = (tail.size - 3) * 1000;
        document.querySelector('#score').textContent = `Score: ${score} pts`;
    },
}