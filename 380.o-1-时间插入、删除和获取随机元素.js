/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function () {
    this._idxMap = new Map()
    this._arr = new Array()
    this._len = 0;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    const idx = this._idxMap.get(val)
    if (idx === undefined) {
        this._arr[this._len] = val;
        this._idxMap.set(val, this._len)
        this._len++;
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) { 
    const idx = this._idxMap.get(val)
    if (idx === undefined)
        return false;
    this.swap(idx, this._len - 1);
    this._idxMap.set(this._arr[idx], idx)
    this._arr.pop();
    this._len--;
    this._idxMap.delete(val) 
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const randomIdx = Math.floor(Math.random() * this._len)
    return this._arr[randomIdx]
};
RandomizedSet.prototype.swap = function (i, j) {
    const temp = this._arr[i]
    this._arr[i] = this._arr[j]
    this._arr[j] = temp;
};
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

