// Типы стримов:
// Readable - Чтение
// Writable - Запись
// Duplex - Для чтения и записи Readable + Writable
// Transform - такой же как Duplex, но может изменять данные по мере чтения

const fs = require('fs');
const path = require('path');

/*fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
})*/

/*
const stream = fs.createReadStream(path.resolve(__dirname, 'data.txt'));

stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => console.log('Done'));
stream.on('open', () => console.log('start reading'));
stream.on('error', (err) => console.log(err));
*/

/*
const writableStream = fs.createWriteStream(path.resolve(__dirname, 'data2.js'));
for (let i = 0; i < 20; i++) {
  writableStream.write(i + '\n');
}
writableStream.end();
writableStream.close();
writableStream.destroy();
writableStream.on('error', (err) => {})*/

const http = require('http');

http.createServer((req, res) => {
  //req - readable stream
  //res - writable stream
  const stream = fs.createReadStream(path.resolve(__dirname, 'data.txt'));
  stream.pipe(res)
})