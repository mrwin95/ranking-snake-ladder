import { Game } from './Game';
import { GameLogsReader } from './GameLogsReader';
import { Ladder } from './Ladder';
import { Player } from './Player';
import { Snake } from './Snake';
const reader = new GameLogsReader('game_logs.csv');
reader.read();
let totalGame: number = 0;

const ladders: Ladder[] = [{start: 4, end: 10}
                          ,{start: 6, end: 14}
                          ,{start: 31, end: 40}
                          ,{start: 32, end: 34}
                          ,{start: 48, end: 55}
                          ,{start: 57, end: 58}
                          ,{start: 77, end: 87}
                          ,{start: 79, end: 80}                        
                          ];
const snakes: Snake[] = [{head: 13, tail: 9}
                        ,{head: 21, tail: 14}
                        ,{head: 28, tail: 11}
                        ,{head: 39, tail: 33}
                        ,{head: 62, tail: 43}
                        ,{head: 65, tail: 63}
                        ,{head: 66, tail: 60}
                        ,{head: 75, tail: 71}
                        ];

let heading = reader.data.shift();
let game_starteds: Game[] = [];
let players: Player[] = [];
let dices = [];

for(let i = 0 ; i < reader.data.length;i++){
    let cols = reader.data[i];    
    if(cols[0] === 'game_started'){        
        
    }
    if(cols[0] === 'player_joins_game'){          
        
    }
    if(cols[0] === 'player_rolls_dice'){        
        dices.push(cols);
    }
}

console.log(game_starteds);