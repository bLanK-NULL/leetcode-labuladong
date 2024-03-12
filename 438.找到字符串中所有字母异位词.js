/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const result = []
    const window = new Map()
    const need = new Map()
    Array.from(p).forEach(item => {
        need.set(item, need.get(item) ? need.get(item) + 1 : 1)
    })
    let l = 0, r = 0;
    let valid = 0;
    while (l <= r && r < s.length) {
        //窗口扩张
        window.set(s[r], window.get(s[r]) ? window.get(s[r]) + 1 : 1)
        r++;
        console.log(s.slice(l, r))
        //如果当前 破坏了异位词
        if (!need.get(s[r - 1])) {
            l = r;
            window.clear();
            valid = 0;
            continue;
        } else if (window.get(s[r - 1]) === need.get(s[r - 1])) { //当前是有用的 && 凑满了一种字母
            valid++;
        }
        //超了
        while (window.get(s[r - 1]) > need.get(s[r - 1]) && l <= r) {

            const del = s[l]
            //删掉了其他种类字母，导致valid-1
            if (del !== s[r - 1] && window.get(del) === need.get(del)) {
                valid--;
            }
            window.set(s[l], window.get(s[l]) - 1)
            l++;

        }

        //满足要求  
        if (valid === need.size) {
            console.log("⭐push", l)
            result.push(l)
            window.set(s[l], window.get(s[l]) - 1)
            l++;
            valid--;

        }
    }
    return result;
};

console.log(findAnagrams("cbaebabacd", "abc"))

// @lc code=end


