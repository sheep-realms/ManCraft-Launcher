const game = new Game();

$(document).on('click', '#game-start', function() {
    if ($(this).hasClass('game-started')) {
        game.stop();
    } else {
        game.launchAnimation();
    }
});