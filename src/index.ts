import fs from 'fs';
import csv from 'csv-parser';
import { Game } from './Game';
import { Player } from './Player';
import { Dice } from './Dice';

const csvFile = "game_logs.csv";

class Rank {
    gameId: number;
    playerId: number;
    roll: number;

    constructor(gameId: number, playerId: number, roll: number){
        this.gameId = gameId;
        this.playerId = playerId;
        this.roll = roll;
    }
}

const processData = (err:Error, data:[]) => {
    if(err) {
        console.log(`An error was encountered: ${err}`);
        return;
    }

    data.shift();

    // const ranks = data.map(row => new Rank(...row));
}

fs.createReadStream(csvFile)
.pipe(csv({delimiter: ','}, processData));

const results = [];
let player_rolls_dices:[] = [];
// let player_rolls_dice = {
//     GameId: number,
//     PlayerId: number,
// }
fs.createReadStream('game_logs.csv')
.pipe(csv())
.on('data', (row) => {
    
    if(row.event_type==='game_started'){
        // const game = new Game(row.);
        
        let game: Game = JSON.parse(row.event_payload);
        // console.log(game);
    }
    if(row.event_type==='player_joins_game'){
        let player: Player = JSON.parse(row.event_payload);
        // console.log(player);
    }
    if(row.event_type==='player_rolls_dice'){        

        let dice: Dice = JSON.parse(row.event_payload);

    }
})
.on('end', () => {
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

const groupArrayOfObjects = (list:any, key:string) => {
    return list.reduce((rv:any, x:any) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {})
};

var people = [
    {sex:"Male", name:"Jeff"},
    {sex:"Female", name:"Megan"},
    {sex:"Male", name:"Taylor"},
    {sex:"Female", name:"Madison"}
];
var groupedPeople=groupArrayOfObjects(people,"sex");
console.log(groupedPeople.Male);//will be the Males


const printRankingSystem = () => {
    const PlayerId = '';
    const Win = 0;
    const Lose = 10;
    const Percent = 0.12;
    const Roll = 2020;
    const Ladder = 10;
    console.log(`Player: ${PlayerId}: Win: ${Win}, Lose: ${Lose}, Percent: ${Percent}, Rolls: ${Roll}, Ladders: ${Ladder}`)
}

printRankingSystem();