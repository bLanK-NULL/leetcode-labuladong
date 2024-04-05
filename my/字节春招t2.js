const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const [buildingCount, maxDist] = (await readline()).split(" ");
    const pos = (await readline()).split(" ");
    // pos.sort();
    let result = 0;
    const onPath = [];
    backT(0);
    console.log(result);

    function backT(start) {
        if (onPath.length > 3) {
            return;
        }
        // console.log(onPath)
        if (onPath.length == 3 && onPath[2] - onPath[0] <= maxDist) {
            result = (result + 1) % 99997867;
            return;
        }

        for (let i = start; i < pos.length; i++) {
            const cur = pos[i];
            if (cur - onPath[0] > maxDist)
                continue;
            onPath.push(cur);
            backT(i + 1);
            onPath.pop();
        }
    }


}()
