const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const len = await readline();
    const params = [];
    for (let i = 0; i < len; i++) {
        params.push(await readline())
    }
    params.forEach(str => console.log(run1(str)))
}()

function run1(str) {
    str = str.split("");
    let len = str.length;
    let i = 0;
    while (i < len) {
        if (i >= 2 && i < len && str[i - 2] == str[i - 1] && str[i - 1] == str[i]) {
            str.splice(i, 1);
            len--;
            continue;
        } else if (i >= 3 && i < len && str[i - 3] == str[i - 2] && str[i - 1] == str[i]) {
            str.splice(i, 1);
            len--;
            continue;
        }
        i++;
    }
    return str.join("")
}

