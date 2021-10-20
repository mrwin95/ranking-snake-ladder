"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
var Dice = /** @class */ (function () {
    function Dice(GameId, PlayerId, roll) {
        this.GameId = GameId;
        this.PlayerId = PlayerId;
        this.roll = roll;
    }
    return Dice;
}());
exports.Dice = Dice;
