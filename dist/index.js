"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJs = require("crypto-js");
class Block {
    constructor(index, hash, previosHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previosHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJs.SHA256(index + previousHash + timestamp + data).toString();
// calculateBlockHash 앞에 static이 없으면 쓸 수 없음.
// Block.calculateBlockHash()
// argument에 gender? 이렇게 쓰면 저건 필수가 아닌 선택을 의미한다.
const genesisBlock = new Block(0, "2020202020202", "", "Hello", 123456);
let blockchain = [genesisBlock];
const getBlockChain = () => blockchain;
const getLastBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previosBlock = getLastBlock();
    const newIndex = previosBlock.index + 1;
    const newTimeStamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previosBlock.hash, newTimeStamp, data);
    const newBlock = new Block(newIndex, newHash, previosBlock.hash, data, newTimeStamp);
    return newBlock;
};
console.log(createNewBlock("hello"), createNewBlock("bye bye"));
//# sourceMappingURL=index.js.map