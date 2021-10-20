import { Game } from "./Game";

export class Player {
    gameId: number;
    playerId: number;

    constructor(game: number, playerId: number) {
        this.gameId = game;
        this.playerId = playerId;
    }
}