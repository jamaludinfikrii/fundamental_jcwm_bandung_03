function middle(string) {
    var position, length;
    if ((string.length % 2) == 0) {
        position = string.length / 2 - 1;
        length = 2;
    } else {
        position = (string.length - 1) / 2;
        length = 1;
    }

    return string.substring(position, position + length);
}

console.log(middle("test"))
console.log(middle("testing"))
console.log(middle("middle"))
console.log(middle("A"))