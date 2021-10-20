"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game(gameId, player) {
        this.player = [];
        this.gameId = gameId;
        this.player = player;
    }
    Game.prototype.getPlayer = function () {
        return this.player;
    };
    return Game;
}());
exports.Game = Game;
