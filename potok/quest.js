const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('Основы Node.js:');
writeableStream.write('Что такое Node.js и его архитектура. \n');
writeableStream.write('Установка Node.js и npm (Node Package Manager). \n');
writeableStream.write('Основы работы с REPL (Read-Eval-Print Loop). \n');
writeableStream.write('Модули и пакеты:');
writeableStream.write('Импорт и экспорт модулей в Node.js. \n');
writeableStream.write('Использование сторонних пакетов с помощью npm. \n');
writeableStream.write('Понимание разницы между глобальными и локальными пакетами. \n');
writeableStream.write('Система файлов и потоки (File System and Streams):!');
writeableStream.write('Работа с файлами и директориями в Node.js. \n');
writeableStream.write('Использование потоков для обработки данных. \n');
writeableStream.write('Асинхронное программирование:');
writeableStream.write('Обзор колбэков (callbacks) и промисов (Promises). \n');
writeableStream.write('Применение async/await для управления асинхронным кодом. \n');
writeableStream.write('WebSocket и реальное время:');
writeableStream.write('Введение в WebSocket и библиотеку Socket.io. \n');
writeableStream.write('Создание чат-приложения с WebSocket. \n');
writeableStream.write('Базы данных:');
writeableStream.write('Подключение и работа с базами данных, такими как MongoDB или MySQL. \n');
writeableStream.write('Создание моделей данных и выполнение запросов. \n');
writeableStream.write('Аутентификация и безопасность:');
writeableStream.write('Реализация аутентификации и авторизации в Node.js приложении. \n');
writeableStream.write('Защита приложения от атак, таких как инъекции и CSRF (межсайтовая подделка запроса). \n');
writeableStream.write('Тестирование:');
writeableStream.write('Использование фреймворков для тестирования, таких как Mocha и Chai. \n');
writeableStream.write('Написание unit-тестов и интеграционных тестов. \n');
writeableStream.end('Завершение записи');
let readableStream = fs.createReadStream(
    'hello.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});