export class Tournament {
    
    player: string;
    win: number;
    lose: number;
    percent: number;
    rolls: number;
    ladders: number;
    snakes: number;

    constructor(player:string, win: number, 
        lose: number, percent: number, rolls: number,
        ladders: number, snakes: number){
            this.player = player;
            this.win = win;
            this.lose = lose;
            this.percent = percent;
            this.rolls = rolls;
            this.ladders = ladders;
            this.snakes = snakes;
    }

    rankingboard(): void {

    }
}