const Game_Over = {
  preload: function () {
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.load.image("gameover", "assets/images/gameover.png");
  },

  create: function () {
    this.storeMaxScore();
    this.add.button(0, 0, "gameover", this.startGame, this);

    game.add.text(235, 450, "LAST SCORE", {
      font: "31px Nanum Pen Script, cursive",
      fill: "#fff",
      align: "center",
    });
    game.add.text(450, 440, score.toString(), {
      font: "38px Nanum Pen Script, cursive",
      fill: "#fff",
      align: "center",
    });
  },

  startGame: function () {
    this.state.start("Game");
    gameOverMusic.stop();
    backgroundMusic.play("", 0, 1, true);
  },

  storeMaxScore: function () {
    let maxScore = localStorage.getItem("maxScore");
    if (maxScore || maxScore <= score) {
      localStorage.setItem("maxScore", score);
    }
  },
};
