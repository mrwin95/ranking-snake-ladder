export class Dice {
    gameId: number;
    playerId: number;
    roll: number;

    constructor(gameId: number, playerId: number, roll: number){
        this.gameId = gameId;
        this.playerId = playerId;
        this.roll = roll;
    }
}