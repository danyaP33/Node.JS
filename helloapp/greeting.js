//2
console.log('greeting module');
let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if (hour > 16) return 'Добрый вечер, ' + name;
    else if (hour > 10) return 'Добрый день, ' + name;
    else return 'Доброе утро, ' + name;
};

//3
module.exports.name = 'Alice';

//4
let currentDate2 = new Date();

global.date = currentDate2;

module.exports.getMessage = function () {
    let hour = currentDate2.getHours();
    if (hour > 16) return 'Добрый вечер, ' + global.name;
    else if (hour > 10) return 'Добрый день, ' + name;
    else return 'Доброе утро, ' + name;
};
