import { Ladder } from "./Ladder";
import { Snake } from "./Snake";

export class Player {
    playerId: number;
    roll: number;
    snakes: Snake[];
    ladders: Ladder[];

    constructor(playerId: number, roll: number, snakes: Snake[], ladders: Ladder[]){
        this.playerId = playerId;
        this.roll = roll;
        this.snakes = snakes;
        this.ladders = ladders;
    }
}