/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const res = new Array(temperatures.length)
    const stack = []
    for (let i = temperatures.length - 1; i >= 0; i--) {
        const t = temperatures[i]
        while (stack.length && t >= stack[stack.length - 1][1]) {
            stack.pop();
        }
        res[i] = stack.length ? stack[stack.length - 1][0] - i : 0;
        stack.push([i, t])
    }
    return res;
};