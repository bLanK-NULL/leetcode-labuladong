/*
HardMan("jack") 输出:
I am jack

HardMan("jack").rest(10).learn("computer") 输出
I am jack
等待10秒
Start learning after 10 seconds
Learning computer

HardMan("jack").restFirst(5).learn("chinese") 输出
等待5秒
Start learning after 5 seconds
I am jack
Learning chinese
*/
class Task {
    constructor(name) {
        this.name = name;
        this.queue = [];  // 装载任务，（队列中的任务已排好序）
        this.whoAmI();
        setTimeout(() => { //* ※非常之优雅，利用宏队列实现任务装载完毕后执行。
            this.run();
        }, 0);
    }
    whoAmI() {
        this.queue.push(() => {
            console.log('I am ' + this.name);
        })
    }
    rest(time) {
        const task = () => {
            console.log('等待' + time + '秒');
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                    console.log('Start learning after ' + time + ' seconds')
                }, time * 1000);
            })
        }
        this.queue.push(task);
        return this;
    }
    restFirst(time) {
        const task = () => {
            console.log('等待' + time + '秒');
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                    console.log('Start learning after ' + time + ' seconds')
                }, time * 1000);
            })
        }
        this.queue.unshift(task);
        return this;
    }
    learn(sth) {
        this.queue.push(() => {
            console.log('Learning ' + sth);
        })
        return this;
    }
    async run() {
        for (let i = 0; i < this.queue.length; i++) {
            await this.queue[i]();
        }
    }
}

function HardMan(name) {
    return new Task(name);
}

// HardMan("jack")
// HardMan("jack").rest(10).learn("computer")  // done;
HardMan("jack").restFirst(5).learn("chinese") // done;