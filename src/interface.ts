/*
  interface는 몸통이 없다.
  구현을 하지 않고 어떠한 행위를 한다고 기술만 한다.
*/
interface TV {
  turnOn(): boolean;
  turnOff(): void; // void: 아무것도 반환하지 않는다는 뜻.
}

const myTV: TV = {
  turnOn() {
    return true;
  },
  turnOff() {
    console.log("tv off");
  }
}

function tryTurnOn(tv: TV) {
  tv.turnOn();
}

tryTurnOn(myTV);

// board에서 게임 말이 놓아지는 공간
interface Cell {
  row: number;
  col: number;
  piece?: Piece; // piece 뒤에 ? 표시는 optional한 값이라 넣어도 되고 안 넣어도 된다.
}

interface Piece {
  move(from: Cell, to: Cell): boolean;
}

function createBoard() {
  const cells: Cell[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({ row, col });
    }
  }
  return cells;
}

// board = cell들의 집합.
const board = createBoard();
// piece는 move라는 행동을 꼭 해야한다.
board[0].piece = {
  move(from: Cell, to: Cell) {
    return true;
  }
}; 