import Board from './Board';
import Paddle from './paddle';
import Ball from './ball';
import ScoreBoard from './scoreBoard';
const gap = 10;

var p1Keys = {
    up: 38,
    down: 40,
};
var p2Keys = {
    up: 65,
    down: 90
};

export default class Game {
    constructor() {
        const canvas = document.getElementById('game');
        this.width = canvas.width;
        this.height = canvas.height;
        this.context = canvas.getContext('2d');
        this.context.fillStyle = 'white';
        this.board = new Board(this.width, this.height);

        this.player1 = new Paddle(this.height, gap, p1Keys);
        this.player2 = new Paddle(this.height, this.width - 4 - gap, p2Keys);
        this.scoreBoard1 = new ScoreBoard(70,30);
        this.scoreBoard2 = new ScoreBoard(220,30);



        this.ball = new Ball(this.width, this.height);

        console.log(this.player1, this.player2);
    }
    render() {
        this.board.render(this.context);
        this.player1.render(this.context);
        this.player2.render(this.context);
        this.ball.render(this.context, this.player1, this.player2);
        this.scoreBoard1.render(this.context);
        this.scoreBoard2.render(this.context);

    }
}
