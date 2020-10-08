var StarbucksGradeExample;
(function (StarbucksGradeExample) {
    StarbucksGradeExample[StarbucksGradeExample["WELCOME"] = 0] = "WELCOME";
    StarbucksGradeExample[StarbucksGradeExample["DDDD"] = 3] = "DDDD";
    StarbucksGradeExample[StarbucksGradeExample["GREEN"] = 1] = "GREEN";
    StarbucksGradeExample[StarbucksGradeExample["GOLD"] = 2] = "GOLD";
})(StarbucksGradeExample || (StarbucksGradeExample = {}));
var StarbucksGrade;
(function (StarbucksGrade) {
    StarbucksGrade["WELCOME"] = "WELCOME";
    StarbucksGrade["GREEN"] = "GREEN";
    StarbucksGrade["GOLD"] = "GOLD";
})(StarbucksGrade || (StarbucksGrade = {}));
function getDiscount(v) {
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
//# sourceMappingURL=enum.js.map