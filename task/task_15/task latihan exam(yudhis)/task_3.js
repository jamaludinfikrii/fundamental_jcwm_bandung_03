var numArray = ([
    [3, 2, 1],
    [4, 6, 5],
    [],
    [9, 7, 8]
]);
for (var i = 0; i < numArray.length - 1; i++) {
    var min = i;
    for (var j = i + 1; j < numArray.length; j++) {
        if (numArray[j] < numArray[min]) {
            min = j;
        }
    }
    if (min != i) {
        var target = numArray[i];
        numArray[i] = numArray[min];
        numArray[min] = target;
    }
}
console.log(numArray);