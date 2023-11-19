// //1
// const http = require('http');
// http.createServer(function (request, response) {
//     response.end('Hello NodeJS!');
// }).listen(3000, '127.0.0.1', function () {
//     console.log(
//         'Сервер начал прослушивание запросов на порту 3000'
//     );
// });

//2
// const os = require('os');
// const greeting = require('./greeting');

// // получим имя текущего пользователя
// let userName = os.userInfo().username;

// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));

// const User = require('./user.js');

// let danya = new User('Danya', 19);
// danya.sayHi();

//3
var greeting1 = require('./greeting.js');
console.log(`Hello ${greeting1.name}`); //Hello Alice

var greeting2 = require('./greeting.js');
greeting2.name = 'Bob';

console.log(`Hello ${greeting2.name}`); //Hello Bob
// greeting1.name тоже изменилось
console.log(`Hello ${greeting1.name}`); //Hello Bob

const welcome = require('./welcome');

welcome.getMorningMessage();
welcome.getEveningMessage();

//4
const greeting = require('./greeting');

global.name = 'Danya';

global.console.log(date);
console.log(greeting.getMessage());

//6
const http = require('http');

let message = 'Hello World!';
http.createServer(function (request, response) {
    console.log(message);
    response.end(message);
}).listen(3000, '127.0.0.1', () => {
    console.log('Сервер начал прослушивание запросов');
});

//7
function displaySync(callback) {
    callback();
}

console.log('Начало работы программы');

setTimeout(function () {
    console.log('timeout 500');
}, 500);

setTimeout(function () {
    console.log('timeout 100');
}, 100);

displaySync(function () {
    console.log('without timeout');
});
console.log('Завершение работы программы');

//8
const fs = require('fs');

// асинхронное чтение
fs.readFile('hello.txt', 'utf8', function (error, data) {
    console.log('Асинхронное чтение файла');
    if (error) throw error; // если возникла ошибка
    console.log(data); // выводим считанные данные
});

// синхронное чтение
console.log('Синхронное чтение файла');
let fileContent = fs.readFileSync('hello.txt', 'utf8');
console.log(fileContent);

//9
const EventEmitter = require('events');

let eventName = 'greet';

class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}

let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function (data) {
    console.log(data);
});

user.sayHi('Мне нужна твоя одежда...')

//10
const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('Привет мир!');
writeableStream.write('Продолжение записи \n');
writeableStream.end('Завершение записи');
let readableStream = fs.createReadStream(
    'hello.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});











