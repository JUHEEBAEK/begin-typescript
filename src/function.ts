function add(x: number, y: number) {
  return x + y;
}

/*
  // add(1, "2"); 
  Argument of type 'string' is not assignable 
  to parameter of type 'number'.
*/

const result = add(1, 2); // 반환되는 result의 type이 number임을 유추할 수 있다.

// default값을 - 세팅해준다.
function buildUserInfo(name = "-", email = "-") {
  return { name, email };
}

const user = buildUserInfo();

// 반환값 add2 type은 number로 지정하지 않아도 number임을 알 수 있다.
const add2 = (a:number, b: number) => a + b;
// 반환값 add3 type은 number로 미리 지정해줄 수 있다.
const add3 = (a:number, b: number):number => a + b;

interface Storage {
  a: string;
}
interface ColdStorage {
  b: string;
}
// 오버로드 시그니쳐 목록
function store(type: "통조림"): Storage
function store(type: "아이스크림"): ColdStorage

// union type
// 함수 구현체
function store(type: "통조림" | "아이스크림") {
  if(type === "통조림") {
    return { a: "통조림" };
  }else if(type === "아이스크림") {
    return { b: "아이스크림" };
  }else {
    throw new Error("unsupported type");
  }
}

const s = store("통조림");
s.a // s.b 는 안됨.
const i = store("통조림");
i.b // i.a 는 안됨.