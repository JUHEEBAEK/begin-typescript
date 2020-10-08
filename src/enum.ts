// 초기에 값을 할당을 해주는 것이 좋다. 그래야 중간에 들어오는 녀석 때문에 코드가 망가질 이유가 없기 때문.
enum StarbucksGradeExample {
  WELCOME = 0,
  DDDD = 3,
  GREEN = 1,
  GOLD = 2
}

enum StarbucksGrade {
  WELCOME = "WELCOME",
  GREEN = "GREEN",
  GOLD = "GOLD"
}

function getDiscount(v: StarbucksGrade): number {
  switch (v) {
    case StarbucksGrade.WELCOME:
      return 0;
    case StarbucksGrade.GREEN:
      return 5;
    case StarbucksGrade.GOLD:
      return 10;
  }
}

console.log(StarbucksGradeExample);

console.log(getDiscount(StarbucksGrade.GREEN));
console.log(StarbucksGrade.GREEN === "GREEN");
console.log(StarbucksGrade);