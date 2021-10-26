import general from "./game.js"

export default class viewBoard {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
            <div class="header">
                <button class="restartButton" type="submit" onClick="refreshPage()">Restart Button</button>
                <h1 id="winner"></h1>
            </div>
            <div class="board">
                <div class="square" data-index="0"></div>
                <div class="square" data-index="1"></div>
                <div class="square" data-index="2"></div>
                <div class="square" data-index="3"></div>
                <div class="square" data-index="4"></div>
                <div class="square" data-index="5"></div>
                <div class="square" data-index="6"></div>
                <div class="square" data-index="7"></div>
                <div class="square" data-index="8"></div>
            </div>`;

        this.onTileClick = undefined;

        this.root.querySelectorAll(".square").forEach(tile => {
            tile.addEventListener("click", () => {
                if (this.onTileClick) {
                    this.onTileClick(tile.dataset.index);
                }
            });
        });
    }


    update(game) {
        this.updateBoard(game);
        let tmp = game.checkWin();
        if (tmp != false) {this.winner(tmp[0], tmp[1], tmp[2], tmp[3]);}
        return 
    }

    updateBoard(game, i) {
        this.root.querySelectorAll(".square").forEach(tile => {
            if (tile.dataset.index == i) {
                console.log(tile, game.first);
                if (!tile.innerHTML){
                    tile.innerHTML = game.first
                }
            }
        });
    }
    winner(player, i, j, k) {
        this.root.querySelectorAll(".square").forEach(tile => {
            if (tile.dataset.index == i || tile.dataset.index == j || tile.dataset.index == k) {
                tile.style.color = "red"
                document.getElementById("winner").innerHTML = "Player " + player + " has won!";
            }
        });
    }

}