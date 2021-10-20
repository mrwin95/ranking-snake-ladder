import { Player } from "./Player";

export class Game {
    gameId: number;
    player: Player[] = [];

    constructor(gameId: number, player: Player[]){
        this.gameId = gameId;
        this.player = player;
    }

    getPlayer(): Player[] {
        return this.player;
    }
}