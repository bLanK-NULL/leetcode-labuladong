/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length)
        return false;
    const need = new Map();
    let l = 0, r = 0;
    Array.from(s1).forEach(item => {
        need.set(item, need.get(item) ? need.get(item) + 1 : 1)
    })
    const window = new Map();
    let valid = 0;
    while (l <= r && r < s2.length) {
        const cur = s2[r]
        //跳过
        if (!need.has(cur)) {
            l = r + 1;
            r++;
            window.clear()
            valid = 0;
            continue;
        }
        //加入窗口
        window.set(cur, window.get(cur) ? window.get(cur) + 1 : 1)
        r++;
        if (window.get(cur) === need.get(cur))
            valid++;
        //当成功匹配到了
        if (valid === need.size)
            return true
        while (window.get(cur) > need.get(cur)) {
            const del = s2[l]
            if(window.get(del) === need.get(del))
                valid--;
            window.set(del, window.get(del)-1)
            l++;
        }
    }
    return false;
};
// @lc code=end

