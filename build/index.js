"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var event_type = [];
var games = fs_1.default.readFileSync('game_logs.csv', {
    encoding: 'utf-8'
}).split('\n')
    .filter(function (s) { return s.trim(); }).map(function (row) {
    return row.split(',');
});
var headings = games.shift();
var data = games.slice(2);
// console.log(headings);
// map all the other lines into objects
// let res = games.map(lineArr => {
//     return lineArr.reduce((a, c, i) => {
//         a[headings[i]] = c;
//         return a;
//     }, "" )
// });
// console.log(games);
// for(let game of games){
//     console.log(game);
// }
// const game = games[1]
// let result = games.reduce((res, row, idx) => {
//     let value = formatObject(header, row);
//     res[value.event_type] = value;
//     return res;
// }, {});
// function formatObject(headers, cells) {
//     return headers.reduce((result:string, header:number, idx:number) => {
//         result[header]= cells[idx];
//         return result;
//     }, {})
// };
console.log(headings);
console.log(data);
