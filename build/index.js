"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameLogsReader_1 = require("./GameLogsReader");
var reader = new GameLogsReader_1.GameLogsReader('game_logs.csv');
reader.read();
var totalGame = 0;
var ladders = [{ start: 4, end: 10 },
    { start: 6, end: 14 },
    { start: 31, end: 40 },
    { start: 32, end: 34 },
    { start: 48, end: 55 },
    { start: 57, end: 58 },
    { start: 77, end: 87 },
    { start: 79, end: 80 }
];
var snakes = [{ head: 13, tail: 9 },
    { head: 21, tail: 14 },
    { head: 28, tail: 11 },
    { head: 39, tail: 33 },
    { head: 62, tail: 43 },
    { head: 65, tail: 63 },
    { head: 66, tail: 60 },
    { head: 75, tail: 71 }
];
var heading = reader.data.shift();
var game_starteds = [];
var players = [];
var dices = [];
for (var i = 0; i < reader.data.length; i++) {
    var cols = reader.data[i];
    if (cols[0] === 'game_started') {
    }
    if (cols[0] === 'player_joins_game') {
    }
    if (cols[0] === 'player_rolls_dice') {
        dices.push(cols);
    }
}
console.log(game_starteds);
