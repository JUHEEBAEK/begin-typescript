// generic을 이용하여  type 을 파라미터화 하는것. x: 
// <T> type에 대한 파라미터화
// Type은 대문자로 쓰는게 관례.1

function createPromise<T>(x: T, timeoute: number) {
  return new Promise<T>((reslove, reject) => {
    // new Promise((reslove: (v: T) => void, 이거 대신에 위에꺼 쓰면 됨.
    setTimeout(() => {
      reslove(x);
    }, timeoute);
  });
}

createPromise(1, 100)
  .then(v => console.log(v));

createPromise<string>("string", 100)
  .then(v => console.log(v));

function createTuple2<T1, T2>(v: T1, v2: T2):[T1, T2] {
  return [v, v2];
}

const t1 = createTuple2("user1", 1000);
t1[0]; // string
t1[1]; // number

function createTuple3<T, U, D>(v: T, v2: U, v3: D):[T, U, D] {
  return [v, v2, v3];
}
