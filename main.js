import general from "./game.js"
import viewBoard from "./board.js"

let game = new general();
let view = new viewBoard(document.getElementById("boardLocation"));

//console.log(game.board)

view.onTileClick = function(i) {
    game.move(i);
    view.update(game);
    view.updateBoard(game, i);
}



