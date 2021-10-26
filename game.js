class game {
	constructor() {
		this.first = 'X';
		this.board = new Array(9).fill(null);
	}

	nexturn() {
		if (this.first === 'X') {
			this.first = 'O';
		} else {
			this.first = 'X';
		}
	}

	move(i) {
		if (this.board[i] !== null) {
			this.board[i] = this.first;
		}
	}

	checkwin() {
		//Checks win condition horizontally
		for (let j = 0; j < 6; h += 3) {
			if (this.board[j] === this.board[j + 1] && this.board[j + 1] === this.board[j + 2]) {
				// If nobody wins function returns 0
				// If player X wins function returns 1
				// If player O wins function returns 2
				if (this.board[j] === 'X') {
					return 1;
				} else {
					return 2;
				}
			}
		}
        //Checks win condition from left to right vertically
		for (let j = 0; j < 6; h += 3) {
			if (this.board[j] === this.board[j + 3] && this.board[j + 3] === this.board[j + 6]) {
				// If nobody wins function returns 0
				// If player X wins function returns 1
				// If player O wins function returns 2
				if (this.board[j] === 'X') {
					return 1;
				} else {
					return 2;
				}
			}
		}
        //Checks win conition criss-cross
        if (this.board[2] === this.board[4] && this.board[4] === this.board[8]) {
            // If nobody wins function returns 0
            // If player X wins function returns 1
            // If player O wins function returns 2
            if (this.board[4] === 'X') {
                return 1;
            } else {
                return 2;
            }
        }
        if (this.board[2] === this.board[4] && this.board[4] === this.board[6]) {
            // If nobody wins function returns 0
            // If player X wins function returns 1
            // If player O wins function returns 2
            if (this.board[4] === 'X') {
                return 1;
            } else {
                return 2;
            }
        }
	}
}
