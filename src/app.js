import { game } from "./util.js";

const canvas = document.querySelector('#canvas');
/**@type {CanvasRenderingContext2D} */ //enables intellisense
export const ctx = canvas.getContext('2d');

export const width = canvas.width;
export const height = canvas.height;
export const hSize = 20;
export const vSize = 20;
export const rectSize = width / hSize;
export const snake = {
    x: 10,
    y: 10,
};

window.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp') {
        snake.y--;
        if (snake.y == -1) snake.y = vSize - 1;
    }
    else if (e.key == 'ArrowDown') {
        snake.y++;
        if (snake.y == vSize) snake.y = 0;
    }
    else if (e.key == 'ArrowLeft') {
        snake.x--;
        if (snake.x == -1) snake.x = hSize - 1;
    }
    else if (e.key == 'ArrowRight') {
        snake.x++;
        if (snake.x == hSize) snake.x = 0;
    }
    else return;
});


game.startGame();



