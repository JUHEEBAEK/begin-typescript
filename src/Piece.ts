import { Cell, Position } from "./Board";
import { PlayerType } from "./Player";

import lionImage from "./style/image/lion.png";
import elephantImage from "./style/image/elephant.png";
import griffImage from "./style/image/griff.png";
import chickenImage from "./style/image/chicken.png";

export class MoveResult {
  constructor(private killPiece: Piece) {}
  getKilled() {
    return this.killPiece
;  }
} 

export interface Piece {
  ownerType: PlayerType;
  currentPosition: Position;
  move(from: Cell, to: Cell): MoveResult;
  render(): string;
}

abstract class DefaultPiece implements Piece {
  constructor(public readonly ownerType: PlayerType, public currentPosition: Position) {
  }
   
  move(from: Cell, to: Cell): MoveResult {
    if(!this.canMove(to.position)) {
      throw new Error("can no move");
    }
    const moveResult = new MoveResult((to.getPiece() != null) ? to.getPiece() : null);
    to.put(this);
    from.put(null);
    this.currentPosition = to.position;
    return moveResult;
  }

  abstract canMove(position: Position): boolean;
  abstract render();

}

export class Lion extends DefaultPiece {
  // 상하좌우 대각선
  canMove(pos: Position) {
    const canMove = (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col)
    || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col)
    || (pos.col === this.currentPosition.col + 1 && pos.row === this.currentPosition.row)
    || (pos.col === this.currentPosition.col - 1 && pos.row === this.currentPosition.row)
    || (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col + 1)
    || (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col - 1)
    || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col + 1)
    || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col - 1);
    return canMove;
  }

  render(): string {
    return `<img class="piece ${this.ownerType}" src="${lionImage}" width="90%" height="90%" />` 
  }

}

export class Elephant extends DefaultPiece {
  // 대각선
  canMove(pos: Position) {
    return (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col + 1)
    || (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col - 1)
    || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col + 1)
    || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col - 1)
  }

  render(): string {
    return `<img class="piece ${this.ownerType}" src="${elephantImage}" width="90%" height="90%" />` 
  }
}

export class Griff extends DefaultPiece {
  // 상하좌우
  canMove(pos: Position) {
    return (pos.row === this.currentPosition.row + 1 && pos.col === this.currentPosition.col)
    || (pos.row === this.currentPosition.row - 1 && pos.col === this.currentPosition.col)
    || (pos.col === this.currentPosition.col + 1 && pos.row === this.currentPosition.row)
    || (pos.col === this.currentPosition.col - 1 && pos.row === this.currentPosition.row);
  }

  render(): string {
    return `<img class="piece ${this.ownerType}" src="${griffImage}" width="90%" height="90%" />` 
  }
}

export class Chick extends DefaultPiece {
  // 앞으로만 갈수 있음.
  canMove(pos: Position) {
    return this.currentPosition.row + ((this.ownerType == PlayerType.UPPER) ? +1 : -1) === pos.row:
  }

  render(): string {
    return `<img class="piece ${this.ownerType}" src="${chickenImage}" width="90%" height="90%" />`
  }
}