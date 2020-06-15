import * as CryptoJs from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJs.SHA256(index + previousHash + timestamp + data).toString();

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

// calculateBlockHash 앞에 static이 없으면 쓸 수 없음.
// Block.calculateBlockHash()

// argument에 gender? 이렇게 쓰면 저건 필수가 아닌 선택을 의미한다.
const genesisBlock: Block = new Block(0, "2020202020202", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockchain;

const getLastBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

console.log(blockchain);

export {};
