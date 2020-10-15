// 제네릭은 인터페이스에서도 사용가능하다.
interface DB<T> {
  add(v: T): void;
  get(): T;
}

class D<T> implements DB<T> {
  add(v: T): void {
    throw new Error("Method not implemented.");
  }
  get(): T {
    throw new Error("Method not implemented.");
  }
}

interface JSONSerialier {
  serialize(): string; // 무조건 JSON문자열 반환해줘야 한다.
}

class LocalDB<T> implements DB<T> {
  constructor(private localStorageKey: string) {

  }
  add(v: T) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(v));
  }

  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return (v) ? JSON.parse(v) : null;
  }
}

// type에 범위를 주고 싶을 때 extends쓴다.
class LocalDB2<T extends JSONSerialier> implements DB<T> {
  constructor(private localStorageKey: string) {

  }
  add(v: T) {
    localStorage.setItem(this.localStorageKey, v.serialize());
  }

  get(): T {
    const v = localStorage.getItem(this.localStorageKey);
    return (v) ? JSON.parse(v) : null;
  }
}

interface User2 { name: string };

const userDb = new LocalDB<User2>("user");
// User2 형식의 타입만 넣을 수 있다. 그냥 juhee만 넣으면 에러남.
userDb.add({name: "juhee" });
const userA = userDb.get();
userA.name;


interface Veigtable {
  v: string;
}

interface Meat {
  v: string;
}
// 타입에 조건문을 넣는 경우
interface Cart2<T> {
  getItem(): T extends Veigtable ? Veigtable : Meat
}

// <> 이 타입 안에 Veigtable 말고 다른거 넣을시 다 Meat을 반환한다. Veigtable => Veigtable
const cart1: Cart2<Veigtable> = {
  getItem() {
    return {
      v: ""
    }
  }
}

cart1.getItem()