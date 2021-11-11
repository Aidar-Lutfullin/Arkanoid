let game = {
  ctx: null,

  sprites: {
    background: null,
    ball: null,
    platform: null,
    block: null,
  },

  init: function () {
    this.ctx = document.getElementById("canvasgame").getContext("2d");
  },

  preload(callback) {
    let loaded = 0;
    let required = Object.keys(this.sprites).length;

    for (let key in this.sprites) {
      this.sprites[key] = new Image();
      this.sprites[key].src = "img/" + key + ".png";
      this.sprites[key].addEventListener("load", () => {
        ++loaded;
        if (loaded >= required) {
          callback();
        }
      });
    }
  },

  run() {
    window.requestAnimationFrame(() => {
      this.render();
    });
  },

  render() {
    this.ctx.drawImage(this.sprites.background, 0, 0);
    this.ctx.drawImage(this.sprites.ball, this.ball.x, this.ball.y);
    this.ctx.drawImage(this.sprites.platform, this.platform.x, this.platform.y);
    this.ctx.drawImage(this.sprites.block, 250, 50);
  },

  start: function () {
    this.init();
    this.preload(() => {
      this.run();
    });
  },
};

game.ball = {
  x: 290,
  y: 310,
};

game.platform = {
  x: 250,
  y: 340,
};

window.addEventListener("load", () => {
  game.start();
});
