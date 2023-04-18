function findFirstOccurrence(number:number[],target:number){
    let low = 0;
    let high = number.length - 1;
    let result = -1;
    while (low <= high){
        let mid = Math.floor(low + high) /2;
        if (target === number[mid]){
            return mid;
        }else if(target > number[mid]){
            low = mid + 1;
        }else {
            high = mid -1;
        }
    }
    return result;
}
let  arr = [1,2,3,4,5,6,7];
console.log(findFirstOccurrence((arr),5));