const fs = require('fs');


console.log('script start')
// process.nextTick(() => {
//     console.log('nextTick1')
//     setTimeout(() => {
//         console.log('setTimeout nextTick1')})
// })

const text = fs.open('./text.txt', () => {
    console.log('text open')
})
console.log(text)
const interval = setInterval(() => {
    console.log('setInterval')
}, 0)
// process.nextTick(() => {
//     console.log('nextTick2')
// })
setTimeout(() => {
    console.log('setTimeout 1')
    Promise.resolve().then(() => {
        console.log('promise 3')
    }).then(() => {
        console.log('promise 4')
    }).then(() => {
        setTimeout(() => {
            console.log('setTimeout 2')
            Promise.resolve().then(() => {
                console.log('promise 5')
            }).then(() => {
                console.log('promise 6')
            }).then(() => {
                clearInterval(interval)
            })
        }, 0)
    })
}, 0)

Promise.resolve().then(() => {
    console.log('promise 1')
}).then(() => {
    console.log('promise 2')
})

//**print**//:

//1.'script start', 2.'promise 1', 3.'promise 2', 4.'setInterval', 5.'setTimeout 1', 6.'promise 3', 7. 'promise 4', 8.'setInterval, 9. 'setTimeout 2', 10. 'promise 5', 11. 'promise 6'

//**callstack**//:

//1.console.log('script start'), 2.console.log('promise 1'), 3.console.log('promise 2'), 4.console.log('setInterval'), 5.console.log('setTimeout 1'), 6, console.log('promise 3'), 7. console.log('promise 4'),
//8. console.log('setInterval'), 9. console.log('setTimeout 2')

//**nextTick queue**//:

//**job queue(microtasks queue)**//:

//1.Promise('promise 1'), 2.Promise('promise 2'), 3. Promise('promise 3'), 4. Promise('promise 4'), 5. Promise('promise 5'), 6. Promise('promise 6'),

//**message queue (macrotasks queue)**//:

//1.interval('setInterval'), 2.setTimeout('setTimeout 1'), 3. setTimeout('setTimeout 2')