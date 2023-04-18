function findFirstOccurrence(number, target) {
    var low = 0;
    var high = number.length - 1;
    var result = -1;
    while (low <= high) {
        var mid = Math.floor(low + high) / 2;
        if (target === number[mid]) {
            return mid;
        }
        else if (target > number[mid]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return result;
}
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(findFirstOccurrence((arr), 5));
