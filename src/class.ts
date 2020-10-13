interface User {
  name: String;
}
interface Product {
  id: string;
  price: number;
}

/* 접근 제한자 3가지 private, protected, public
private을 붙이면 다른 곳에서 접근을 할 수 가 없다. 클래스 내부에서만 접근 가능하다.
protected 다른 클래스에서 상속은 가능하다.
public 아무것도 주지 않았을 시 default 값 public. */

class Cart {
  // protected user: User; // 1번
  // private store: object; // 1번

   /* 생성자에 접근 제한자를 매개변수 안에다가 같이 쓰면 
      속성을 정의를 하고(1번) 동시에 전달받은 인자를 해당 속성에 할당(2번)도 할 수 있다. 
    */
  constructor(protected user: User, private store: object = {}) {
    // 2번 this.user = user;
    // 2번 this.store = {};
  }
  public put(id: string, product: Product) {
    this.store[id] = product;
  }
  get(id: string) {
    return this.store[id];
  }
}

class PromotionCart extends Cart {
  addPromotion() {
    this.user
  }
}
// PromotionCart로 만들어진 cart2는 Cart의 기능도 쓸 수 있다.
// cart2.put(), cart2.get() cart2.addPromotion() 등
const cart2 = new PromotionCart({ name: "jhon" });

const cartJhon = new Cart({name: "jhon"});
const cartJay = new Cart({name: "jay"});
