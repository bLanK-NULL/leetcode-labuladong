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
function quickSort2(arr, i, j) {
    if (i == j) return;
    const pre_i = i, pre_j = j;
    const pivot = arr[i];
    while (i < j) {
        while (i < j && pivot <= arr[j]) // 上面是把小于pivot的数放到pivot左边
            i++;
        if (i < j)
            arr[i] = arr[j];
        while (i < j && pivot > arr[i]) // 最好一个写了等号一个别写
            j--;
        if (i < j)
            arr[j] = arr[i];
    }
    arr[i] = pivot;
    quickSort2(arr, pre_i, i - 1);
    quickSort2(arr, i + 1, pre_j);
}

