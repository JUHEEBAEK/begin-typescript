interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Juhee",
  age: 29,
  gender: "female"
};

// argument에 gender? 이렇게 쓰면 저건 필수가 아닌 선택을 의미한다.
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age},  you are a ${person.gender}`!;
};

console.log(sayHi(person));

export {};
