let arr = ["javascript", "java", "react", "html", "phython", "c/c++", "kotlin", "curry", "delphi", "php"];
let accumulator = [];
for (i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
        accumulator.push(arr[i]);
    };
};
console.log(accumulator);