function sorting(a, b) {
    return a - b;
}


function median(values) {

    values.sort(function (a, b) {
        return a - b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];
    else
        return (values[half - 1] + values[half]) / 2.0;
}

function splitArray({
    alternate,
    array
}) {
    var halfIndex = Math.ceil(array.length / 2) - 1;
    var firstArray = true;
    return array.reduce((res, item, index) => {
        if (firstArray) {
            res[0].push(item);
            if (alternate || index >= halfIndex) {
                firstArray = false;
            }
        } else {
            res[1].push(item);
            if (alternate) {
                firstArray = true;
            }
        }
        return res;
    }, [
        [],
        []
    ]);
}





var number = [71, 70, 73, 70, 70, 69, 70, 72, 71, 300, 71, 69];
console.log(number.sort(sorting))
console.log(median(number))

var splitAlternate = splitArray({
    alternate: true,
    array: number
});
var splitNoAlternate = splitArray({
    alternate: false,
    array: number
});
console.log(splitAlternate)
console.log(splitNoAlternate)