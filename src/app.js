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
    if (e.key == 'ArrowUp') snake.y--;
    else if (e.key == 'ArrowDown') snake.y++;
    else if (e.key == 'ArrowLeft') snake.x--;
    else if (e.key == 'ArrowRight') snake.x++;
    else return;
});


game.startGame();



