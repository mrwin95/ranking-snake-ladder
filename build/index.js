"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var csv_parser_1 = __importDefault(require("csv-parser"));
var csvFile = "game_logs.csv";
var Rank = /** @class */ (function () {
    function Rank(gameId, playerId, roll) {
        this.gameId = gameId;
        this.playerId = playerId;
        this.roll = roll;
    }
    return Rank;
}());
var processData = function (err, data) {
    if (err) {
        console.log("An error was encountered: " + err);
        return;
    }
    data.shift();
    // const ranks = data.map(row => new Rank(...row));
};
fs_1.default.createReadStream(csvFile)
    .pipe((0, csv_parser_1.default)({ delimiter: ',' }, processData));
var results = [];
var player_rolls_dices = [];
// let player_rolls_dice = {
//     GameId: number,
//     PlayerId: number,
// }
fs_1.default.createReadStream('game_logs.csv')
    .pipe((0, csv_parser_1.default)())
    .on('data', function (row) {
    if (row.event_type === 'game_started') {
        // const game = new Game(row.);
        var game = JSON.parse(row.event_payload);
        // console.log(game);
    }
    if (row.event_type === 'player_joins_game') {
        var player = JSON.parse(row.event_payload);
        // console.log(player);
    }
    if (row.event_type === 'player_rolls_dice') {
        var dice = JSON.parse(row.event_payload);
    }
})
    .on('end', function () {
    console.log('CSV file successfully processed');
});
// const groupBy = (list, keyGetter) => {
//     const map = new Map();
//     list.forEach((item) => {
//         const key = keyGetter(item);
//         const collection = map.get(key);
//         if(!collection) {
//             map.set(key, [item]);
//         } else {
//             collection.push(item);
//         }
//     });
//     return map;
// }
var groupArrayOfObjects = function (list, key) {
    return list.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};
var people = [
    { sex: "Male", name: "Jeff" },
    { sex: "Female", name: "Megan" },
    { sex: "Male", name: "Taylor" },
    { sex: "Female", name: "Madison" }
];
var groupedPeople = groupArrayOfObjects(people, "sex");
console.log(groupedPeople.Male); //will be the Males
var printRankingSystem = function () {
    var PlayerId = '';
    var Win = 0;
    var Lose = 10;
    var Percent = 0.12;
    var Roll = 2020;
    var Ladder = 10;
    console.log("Player: " + PlayerId + ": Win: " + Win + ", Lose: " + Lose + ", Percent: " + Percent + ", Rolls: " + Roll + ", Ladders: " + Ladder);
};
printRankingSystem();
