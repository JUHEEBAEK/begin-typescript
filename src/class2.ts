interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirement: string): string;
}
// 다중 implements를 구현하려면 , 사용해서 계속 붙임.
class KoreanProgrammer implements Person, Programmer {
  constructor(public name: string) {}

  writeCode(requirement: string): string {
    return requirement + ".....";
  }

  say(message: string): void {
    console.log(message);
  }

  loveKimchi() {
    console.log("love Kimchi~");
  }
}

const juhee = new KoreanProgrammer("juhee");
//  juhee 가 할 수 있는 일 loveKimchi(), say(), writeCode()
juhee.loveKimchi();
juhee.say("안녕?");
juhee.writeCode("Jelly!");

// 특정 속성이나 메소드에 abstract를 사용해서 하위타입에서 꼭 가지도록 하는 것.
abstract class Korean implements Person {
  public abstract jumin: number;
  constructor(public name: string) {}

  say(msg: string) {
    console.log(msg);
  }

  abstract loveKimchi(): void;
}

class KoreanProgrammer2 extends Korean implements Programmer {
  constructor(public name: string, public jumin: number) {
    super(name); // 부모클래스의 Korean의 생성자를 호출해야함.
  }

  // abstract methods 인 loveKimchi를 갖고 있지 않으면 에러남.
  loveKimchi(): void {
    throw new Error("Method not implemented.");
  }
  // programmer가 가지고 있어야하는 methods 역시 가져야함. 안 그렇면 에러남.
  writeCode(requirement: string): string {
    throw new Error("Method not implemented.");
  }

  say(message: string): void {
    console.log(message);
  }
}

const juhee2 = new KoreanProgrammer2("juhee", 2222);