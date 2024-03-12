function quickSort(arr) {
    const len = arr.length;
    if (len <= 1) {
        return arr
    }
    const idx = Math.floor(Math.random() * len)
    const pivot = arr[idx]
    console.log(idx)
    const leftArr = []
    const rightArr = []
    for (let i in arr) { //为什么不行呢？报错堆栈溢出 ： 因为这是String
    // for (let i = 0; i < len; i++) { // 可以
        if (i == idx) continue;
        const cur = arr[i]
        if (cur < pivot)
            leftArr.push(cur)
        else
            rightArr.push(cur)
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const unsortedArr = [5, 2, 9, 3, 5, 8, 7];
const sortedArr = quickSort(unsortedArr);
console.log(sortedArr); // 输出：[2, 3, 5, 5, 7, 8, 9]