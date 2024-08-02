const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second, third) => {
    console.log('Вы прислали сообщение ' + data);
    console.log('Второй аргумент ' + second);
})

const MESSAGE = process.env.message || '';

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123123);
}else {
    emitter.emit('message', 'Вы не указали сообщение');
}

// Когда удобно использовать?
// http
// websockets
// long pulling
// clusters