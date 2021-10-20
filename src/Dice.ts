export class Dice {
    GameId: number;
    PlayerId: number;
    roll: number;

    constructor(GameId: number, PlayerId: number, roll: number){
        this.GameId = GameId;
        this.PlayerId = PlayerId;
        this.roll = roll;
    }
}