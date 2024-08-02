const fs = require('fs');
const path = require('path');

/*
console.log('Start');

fs.mkdir(path.resolve(__dirname, 'dir'), (err) =>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("Directory Created");
});

console.log('Fin');
*/

/*fs.rmdir(path.resolve(__dirname, 'dir'), { recursive: true }, (err) => {
    if (err) {
        console.error(err);
    };
    console.log('Directory removed.');
});*/

/*Callback hell*/
/*fs.writeFile(path.resolve(__dirname, 'test.js'), '5sfhsdkhfkasjdfhsdkfjahsdf   dfgdfsgsfgsdfg', (err) => {
    if (err) {
        throw err;
    }
    fs.appendFile(path.resolve(__dirname, 'test.js'), 'Some tester text', (err) => {
        if (err) {
            throw err;
        }
        console.log('file saved to: ' + path.resolve(__dirname, 'test.js'));
    });
});*/

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
            if (err) {
                return reject(err.message);
            }
            resolve();
        }))
}

/*const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
            if (err) {
                return reject(err.message);
            }
            resolve();
        }))
}*/

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) =>
        fs.readFile(path,  {encoding: 'utf8'},(err, data) => {
            if (err) {
                return reject(err.message);
            }
            resolve(data);
        }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message);
        }
        resolve()
    }))
}



/*writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
    .then(()=> appendFileAsync(path.resolve(__dirname, 'test.txt'),'123'))
    .then(()=> appendFileAsync(path.resolve(__dirname, 'test.txt'),'456'))
    .then(()=> appendFileAsync(path.resolve(__dirname, 'test.txt'),'789'))
    .then(()=> readFileAsync(path.resolve(__dirname, 'test.txt')))
    .then(data => console.log('data:', data))
    .catch(err => console.log(err));*/

/*removeFileAsync(path.resolve(__dirname, 'test.txt'))
    .then(() => console.log('Done'))*/

/*----------------------------------------------------------------------------------------*/
/*Задача (нужные функции выше надо раскомментировать)*/
// Через переменную окружения передать строку, записать ее в файл
// Прочитать файл, посчитать количество слов в файле и записать
// их в новый файл count.txt, затем удалить первый файл

/*
const text = process.env.TEXT || '';
console.log(text)

 writeFileAsync(path.resolve(__dirname, 'temp.txt'), text)
     .then(() => readFileAsync(path.resolve(__dirname, 'temp.txt')))
     .then(data => data.split(' ').length)
     .then(count =>  writeFileAsync(path.resolve(__dirname, 'count.txt'), `Count of words: ${count}`))
     .then(() => removeFileAsync(path.resolve(__dirname, 'temp.txt')))

     .then(() => console.log('Done'));
*/
/*--------------------------------------------------------------------------------------*/





