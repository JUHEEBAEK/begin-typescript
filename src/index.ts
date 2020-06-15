class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previosHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previosHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

// argument에 gender? 이렇게 쓰면 저건 필수가 아닌 선택을 의미한다.
const genesisBlock: Block = new Block(0, "2020202020202", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
