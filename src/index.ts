// argument에 gender? 이렇게 쓰면 저건 필수가 아닌 선택을 의미한다.
const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age},  you are a ${gender}`!;
};

console.log(sayHi("Juhee", 29, "female"));

export {};
