import fs from 'fs';

const event_type: string[] = [];

const games = fs.readFileSync('game_logs.csv', {
    encoding: 'utf-8'
}).split('\n')
.filter(s => s.trim()).map((row: string): string[] => {        
    return row.split(',')
})


let headings = games.shift() as string[];

let data = games.slice(2);

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