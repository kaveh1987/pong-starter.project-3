export default class Paddle {
    constructor(boardHeight, x, control) {
        this.width = 5;
        this.height = 35;
        this.x = x;
        this.y = (boardHeight / 2) - (this.height / 2);
        this.speed = 15;
        this.maxHeight = boardHeight;
        // this.control = 1;

        document.addEventListener('keydown', event => {
            switch(event.keyCode) {
                case control.up:
                    this.y = Math.max(
                      0,
                      this.y -this.speed
                    );
                    break;

                case control.down:
                  this.y = Math.min(
                  this.maxHeight - this.height,
                    this.y + this.speed
                  );
                  break;
            }
        });
}

render(ctx) {
    ctx.fillRect(
        this.x, this.y,
        this.width, this.height
    );
    ctx.fillStyle = "rgba(0,0,255,0.9)";

}
}
