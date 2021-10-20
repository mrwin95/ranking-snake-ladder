"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tournament = void 0;
var Tournament = /** @class */ (function () {
    function Tournament(player, win, lose, percent, rolls, ladders, snakes) {
        this.player = player;
        this.win = win;
        this.lose = lose;
        this.percent = percent;
        this.rolls = rolls;
        this.ladders = ladders;
        this.snakes = snakes;
    }
    Tournament.prototype.rankingboard = function () {
    };
    return Tournament;
}());
exports.Tournament = Tournament;
