/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * O(m+n)
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 方法一
// var minWindow = function (s, t) {
//     if (s.length < t.length)
//         return ''
//     const map = new Map()
//     let l = 0;
//     let r = 0;
//     let tt = {};
//     let result = [];
//     Array.from(t).forEach(item => {
//         tt[item] = tt[item] ? tt[item] + 1 : 1;
//     })
//     while (l <= r && r < s.length) {
//         if (map.has(s[r]))
//             map.set(s[r], map.get(s[r]) + 1);
//         else map.set(s[r], 1)
//         r++;
//         // 窗口左边的是没用的||  窗口左边的超出了
//         while (l < r && (!tt[s[l]] || map.get(s[l]) > tt[s[l]])) {
//             map.set(s[l], map.get(s[l]) - 1)
//             l++;
//         }
//         if (finish(map, tt)) {
//             if (result.length == 0) result = [l, r]
//             else if (r - l < result[1] - result[0])
//                 result = [l, r]
//         }
//     }
//     if(result.length===0) {
//         return ''
//     }
//     return s.slice(result[0], result[1]);
// };
// function finish(map, tt) {
//     for (key of Object.keys(tt)) {
//         if ((!map.has(key)) || (map.get(key) < tt[key]))
//             return false
//     }
//     return true;
// }

// 方法二

var minWindow = function(s, t) {
    // 哈希表 need 记录需要匹配的字符及对应的出现次数
    // 哈希表 window 记录窗口中满足 need 条件的字符及其出现次数
    let need = new Map();
    let window = new Map();
    for (let i = 0; i < t.length; i++) {
        if (need.has(t[i])) {
            need.set(t[i], need.get(t[i]) + 1);
        } else {
            need.set(t[i], 1);
        }
    }
    let left = 0, right = 0;
    let valid = 0;
    // 记录最小覆盖子串的起始索引及长度
    let start = 0, len = Infinity;
    while (right < s.length) {
        // c 是将移入窗口的字符
        let c = s[right];
        // 扩大窗口
        right++;
        // 进行窗口内数据的一系列更新
        if (need.has(c)) {
            if (window.has(c)) {
                window.set(c, window.get(c) + 1);
            } else {
                window.set(c, 1);
            }
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        // 判断左侧窗口是否要收缩
        while (valid === need.size) {
            // 在这里更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }
            // d 是将移出窗口的字符
            let d = s[left];
            // 缩小窗口
            left++;
            // 进行窗口内数据的一系列更新
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }
    // 返回最小覆盖子串
    return len === Infinity ? '' : s.substr(start, len);
};
// @lc code=end

