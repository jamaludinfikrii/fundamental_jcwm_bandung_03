//1
console.log(Math.max(3, 4, 5)) // 5
console.log(Math.max(8, 4, 5)) // 8
console.log(Math.max(8, 9, 5)) // 9

//2
var array = [0, 5, 1];


var sum = array.reduce(function (a, b) {
    return a + b;
}, 0);

console.log(sum);

//3
function test_same_digit(num) {
    var first = num % 10;
    while (num) {
        if (num % 10 !== first) return false;
        num = Math.floor(num / 10);
    }
    return true
}

console.log(test_same_digit(5, [2, 4, 5]));
console.log(test_same_digit(3, [2, 4, 5]));
console.log(test_same_digit(1, [2, 4, 5]));

//4
function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(char_count('Purwadhika Digital School', 'i'));
console.log(char_count('Purwadhika Digital School', 'a'));
console.log(char_count('Purwadhika Digital School', 'p'));

//5
function wave(string) {
    var result = [],
        i;

    for (i = 0; i < string.length; i++) {
        if (string[i] === ' ') continue;
        result.push(Array.from(string, (c, j) => i === j ? c.toUpperCase() : c).join(''));
    }
    return result;
}

console.log(wave("fikri"));
console.log(wave("abc"));
console.log(wave(""));