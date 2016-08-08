import './game.css';
import Game from './game';
import settings from './settings';
var game = new Game();
const fps = 30;

function gameLoop() {
    setTimeout(gameLoop, fps);
    game.render();
}
gameLoop();
