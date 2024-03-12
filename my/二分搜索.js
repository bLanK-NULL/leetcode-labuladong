/**
 * 升序数组二分查找
 * @param {compareable[]} arr 
 * @param {compareable} val 
 * @returns {Number} index 
 */
function binarySearch (arr, val) {
    let left = 0, right = arr.length-1;
    while(left <= right) {
        let mid = (left+right)>>1
        if(arr[mid] === val)
            return mid
        else if(arr[mid]<val) {
            left = mid+1
        }else {
            right = mid-1;
        }
    }
    return -1
}
let demo = [1,2,3,5,6,8,12,45,123,567,1112]
console.log(binarySearch(demo, 45));
