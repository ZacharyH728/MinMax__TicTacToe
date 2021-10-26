import viewBoard from './board.js';
export default class general {
	constructor() {
		this.first = 'O';
		this.board = new Array(9).fill(null);
	}

	nextTurn() {
		if (this.first === 'X') {
			this.first = 'O';
		} else if (this.first === "O") {
			this.first = 'X';
		}
	}

	move(i) {
		if (this.board[i] == null) {
			console.log(this.first)
			this.nextTurn()
			this.board[i] = this.first;
			this.nextTurn()
			this.nextTurn()
		}
	}

	checkWin() {
		//Checks win condition horizontally
		for (let i = 0; i < 9; i += 3) {
			if (this.board[i] == this.board[i + 1] && this.board[i + 1] == this.board[i + 2]) {
				if (this.board[i] !== null) {
					let tmp = [
						this.board[i],
						i,
						i + 1,
						i + 2
					];
					return tmp;
				}
			}
		}
		//Checks win condition from left to right vertically
		for (let i = 0; i < 3; i++) {
			if (this.board[i] === this.board[i + 3] && this.board[i + 3] === this.board[i + 6]) {
				if (this.board[i] !== null) {
					let tmp = [
						this.board[i],
						i,
						i + 3,
						i + 6
					];
					return tmp;
				}
			}
		}
		//Checks win conition criss-cross
		if (this.board[2] === this.board[4] && this.board[4] === this.board[6]) {
			if (this.board[2] !== null) {
				let tmp = [
					this.board[2],
					2,
					4,
					6
				];
				return tmp;
			}
		}
		if (this.board[0] === this.board[4] && this.board[4] === this.board[8]) {
			if (this.board[0] !== null) {
				let tmp = [
					this.board[0],
					0,
					4,
					8
				];
				return tmp;
			}
		}
		return false;
	}
}
