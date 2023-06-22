import { util } from "./util.js";

const canvas = document.querySelector('#canvas');
/**@type {CanvasRenderingContext2D} */ //enables intellisense
export const ctx = canvas.getContext('2d');

export const width = canvas.width;
export const height = canvas.height;
export const hSize = 20;
export const vSize = 20;
export const rectSize = width / hSize;


util.startGame(false);

util.drawRect(8, 15, 'orange');


