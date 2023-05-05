const Menu = {
  preload: function () {
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.load.image("menu", "assets/images/menu.png");
    game.load.audio("backgroundMusic", "assets/music/stranger-things.mp3");
    game.load.audio("gameOverMusic", "assets/music/game-over.mp3");
  },

  create: function () {
    this.add.button(0, 0, "menu", this.startGame, this);
  },

  startGame: function () {
    this.state.start("Game");
  },
};
