class Game {
	constructor() {
		this.score = 0;
		this.boardWidth = 10;
		this.boardHeight = 23;
		this.currentBoard = new Array(this.boardHeight).fill(0).map(() => new Array(this.boardWidth).fill(0));
		this.currentBoard = new Array(this.boardHeight).fill(0).map(() => new Array(this.boardWidth).fill(0));
		this.currentTetromino = null;

		this.canvas = document.getElementById('tetris-canvas');
		this.ctx = this.canvas.getContext('2d');
	
	}

	draw(blockSize = 24, padding = 4) {
		/* Vẽ khung của board */
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.lineWidth = 2;
		this.ctx.rect(padding, padding, blockSize*this.boardWidth+padding*(this.boardWidth+1), blockSize*(this.boardHeight-3)+padding*(this.boardHeight-3+1))
		this.ctx.stroke();
		
		/* Lặp qua các phần tử của mảng board và vẽ các block tại đúng vị trí */
		for (let i = 3; i < this.boardHeight; i++) {
			for (let j = 0; j < this.boardWidth; j++) {
			if (this.currentBoard[i][j] > 0) {
				this.ctx.fillStyle = 'rgb(0, 0, 0)'
			} else {
				this.ctx.fillStyle = 'rgb(248, 248, 248)'
			}
			this.ctx.fillRect(padding*2+j*(blockSize+padding), padding*2+(i-3)*(blockSize+padding), blockSize, blockSize)
			}
		}
		
		/* Viết ra các đoạn text */
		this.ctx.fillStyle = 'rgb(0, 0, 0)';
		this.ctx.font = '32px';
		this.ctx.fillText('TIẾP THEO:', 300, 28);
		this.ctx.fillText('ĐIỂM SỐ:', 300, 200);
		this.ctx.fillText(this.score.toString(), 300, 230);
	}

}

document.addEventListener('DOMContentLoaded', () => {
	const game = new Game();
	game.draw();
})