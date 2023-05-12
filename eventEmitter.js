const EventEmitter = require("events");
const data = require("events");
// let emitter = new Emitter();
let eventName = "greet";
// emitter.on(eventName, () => {
//     console.log("Hello all!");
// });
//
// emitter.on(eventName, () => {
//     console.log("Привет!");
// });
//
// emitter.emit(eventName);


class Terminator extends EventEmitter {
    sayHi() {
        this.emit(eventName, data)
    }
}

let terminator = new Terminator()

terminator.on(eventName, (data) => {
    console.log(data)
})

terminator.sayHi('I need your clothe')