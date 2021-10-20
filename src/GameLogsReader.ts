import fs from 'fs';
import csv from 'csv-parser';
import { Dice } from './Dice';
import { Game } from './Game';

export class GameLogsReader {

  data: string[][] = [];
  dices: Dice[][] = [];
  gameData: Game[] = [];

  constructor(public filename: string) {}

  read(): void{
      this.data = fs.readFileSync(this.filename, {
        encoding: 'utf-8'
      })
      .split('\n')
      .filter(s=>s.trim())
      .map((row:string): string[] => {          
        return row.split(',');
      })
  }

  readData(): void {
    fs.createReadStream(this.filename)
    .pipe(csv())
    .on('data', (row) => {
      if(row.event_type === 'game_started'){      
        let games: Game = JSON.parse(row.event_payload);        
      }
      if(row.event_type === 'player_joins_game'){

      }
      if(row.event_type === 'player_rolls_dice'){
        let dices: Dice = JSON.parse(row.event_payload);        
      }
    })
  }
}