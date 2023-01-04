let arr = ["Ислам", "Альви", "Расул", "Аслан", "Ваха", "Магомед", "Усман"];
let accumulator = [];
for (i = 0; i < arr.length; i++) {
    if (arr[i][0] == 'А') {
        accumulator.push(arr[i]);
    };
};

console.log(accumulator);