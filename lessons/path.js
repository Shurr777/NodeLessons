/*что бы запустить этот файл  'node path.js' в командной строке */

const path = require("path");

console.log('Склеить участки пути, потому что в разных системах это делается по разному', path.join(__dirname, "first", "second", "third"));
console.log('__dirname дает полный путь к директории, ".."- на уровень вверх', path.join(__dirname, "..", "first", "second", "third"));


console.log('Получить абсолютный путь', path.resolve("first", "second", "third"));
const fullpath = path.resolve(__dirname, "first", "second", "third.js");
console.log('Парсинг пути', path.parse(fullpath));
console.log('Разделитель в ОС', path.sep);
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'));
console.log('Название файла', path.basename(fullpath));
console.log('РАсширение файла', path.extname(fullpath));

//=======================================================

const siteURL = 'http://localhost:8080/users?id=5123';

const url = new URL(siteURL);

console.log(url);

