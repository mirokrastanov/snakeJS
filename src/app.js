import { game } from "./util.js";

const canvas = document.querySelector('#canvas');
/**@type {CanvasRenderingContext2D} */
export const ctx = canvas.getContext('2d');

export const width = canvas.width;
export const height = canvas.height;
export const hSize = 20;
export const vSize = 20;
export const rectSize = width / hSize;
export const snake = { x: 10, y: 10 };
export const speed = { x: 1, y: 0 };

window.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowUp') [speed.y, speed.x] = [-1, 0];
    else if (e.key == 'ArrowDown') [speed.y, speed.x] = [1, 0];
    else if (e.key == 'ArrowLeft') [speed.y, speed.x] = [0, -1];
    else if (e.key == 'ArrowRight') [speed.y, speed.x] = [0, 1];
    else return;
});


game.startGame();



