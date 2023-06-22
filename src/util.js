import { ctx, width, height, hSize, vSize, rectSize } from './app.js';

export const util = {
    drawGrid: function (hideGrid) {
        if (hideGrid) ctx.strokeStyle = 'white';
        else ctx.strokeStyle = '#999999';
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
    startGame: function (hideGrid = false) {
        this.clearGrid();
        this.drawGrid(hideGrid);


    },

}