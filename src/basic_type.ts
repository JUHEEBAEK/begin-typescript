let numValue: number;
let stringValue: string;
let booleanValue: boolean;
// 모든 타입의 하위 타입
let undefinedValue: undefined; 
let nullValue: null;

let objValue: object;
let symbolValue: symbol;
// 모든 타입의 상위 타입
let anyValue: any;

numValue = 3.3;
stringValue = "aaa";
stringValue = 'hello';
stringValue = `
hello
${1+1}
hi
`;

booleanValue = true;
undefinedValue = null;
numValue = null;
numValue = undefined;

anyValue = 1;
anyValue = "3";
anyValue = null;
anyValue = {};

objValue = { name: "juhee" };
objValue = {};
objValue = new String(33);

// Symbol() 로만 만들 수 있다.
symbolValue = Symbol();

let nameList: string[];
nameList = ["1", "2"];

let user1: { name:string, score:number };
user1 = {
  name: "juhee",
  score: 100
}
// 매번 정의해야 하는 건 인터페이스나 등등 으로 구현가능
let user2: { name:string, score:number };

// tuple은 갯수와 타입 둘 다 맞아야한다.
let tuple2: [number, string];
tuple2 = [2, "hello"];
let tuple3: [number, number, number];
tuple3 = [2, 2, 3];
