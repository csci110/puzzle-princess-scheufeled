import {game} from "./sgc/sgc.js";
game.setBackground("floor.png");

class TicTacToe extends game { 
    constructor() {
        super();
        this.name = "The Board";
        this.image = ("board.png");
        this.x = 300;
        this.y = 85;
        this.squareSize = 150; // the number of pixels on each side of a board square
        this.size = 3; //set size of board 3 by 3
        this.activeMarker; // variable exists, but value is undefined
    } 
}

class Marker extends game {
    constructor( board, image, name) {
        super();
        this.board = board;
        this.name = name;
        this.image = image;
        this.x = 150;
        this.y = 275;
    }
}

let theBoard = new TicTacToe();
theBoard.takeTurns();