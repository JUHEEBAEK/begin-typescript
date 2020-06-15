"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previosHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previosHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
// argument에 gender? 이렇게 쓰면 저건 필수가 아닌 선택을 의미한다.
const genesisBlock = new Block(0, "2020202020202", "", "Hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map