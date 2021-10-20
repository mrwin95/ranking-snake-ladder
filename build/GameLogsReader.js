"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLogsReader = void 0;
var fs_1 = __importDefault(require("fs"));
var csv_parser_1 = __importDefault(require("csv-parser"));
var GameLogsReader = /** @class */ (function () {
    function GameLogsReader(filename) {
        this.filename = filename;
        this.data = [];
        this.dices = [];
        this.gameData = [];
    }
    GameLogsReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
            .split('\n')
            .filter(function (s) { return s.trim(); })
            .map(function (row) {
            return row.split(',');
        });
    };
    GameLogsReader.prototype.readData = function () {
        fs_1.default.createReadStream(this.filename)
            .pipe((0, csv_parser_1.default)())
            .on('data', function (row) {
            if (row.event_type === 'game_started') {
                var games = JSON.parse(row.event_payload);
            }
            if (row.event_type === 'player_joins_game') {
            }
            if (row.event_type === 'player_rolls_dice') {
                var dices = JSON.parse(row.event_payload);
            }
        });
    };
    return GameLogsReader;
}());
exports.GameLogsReader = GameLogsReader;
