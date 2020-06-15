class Human {
  public name: string;
  private age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lyin", 18, "female");

// const sayHi = (person: Human): string => {
// 이렇게 쓰면 에러남. Property 'age' is private and only accessible within class 'Human'.
const sayHi = (person): string => {
  return `Hello ${person.name}, you are ${person.age},  you are a ${person.gender}`!;
};

console.log(sayHi(lynn));

export {};
