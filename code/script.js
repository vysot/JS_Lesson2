// Перепишите if с использованием оператора '?'
// if(a + b < 4){
//     result = 'Мало';
// }else{
//     result = 'Много';
// }
var a = parseInt(prompt('Назовите первое число (a)'));
var b = parseInt(prompt('Назовите второе число (b)'));

document.write('Назовите первое число (a):' + a + '<br/>');
document.write('Назовите второе число (b):' + b + '<br/>');
(a + b < 4) ? document.write('Результат выражения a + b < 4: Мало') :
    document.write('Результат выражения a + b < 4: Много');

document.write("<br/> <br/> <br/>");

// Перепишите if с использованием нескольких операторов '?'
// var message;

// if (login == 'Вася') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здраствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// }else {
//     message = '';
// }
var login = prompt('Напишите Ваш логин');

(login == 'Вася') ? document.write('Привет') :
    (login == 'Директор') ? document.write('Здраствуйте') :
        (login == '') ? document.write('Нет логина') : document.write('Неизвестный логин');
console.log("login", login);

document.write("<br/> <br/> <br/>");

// Дано два числа A и B, где (A '>' B). Выведите на экран сумму всех чисел, расположенных в числовом промежутке от A до B.
// Выведите на экран все нечетные значения, расположенных в числовом промежутке от A до B.  
var A = parseInt(prompt('Напишите первое число (A)'));
var B = parseInt(prompt('Напишите второе число (B)'));
var result = 0;

document.write('Напишите первое число (A): ' + A + '<br/>');
document.write('Напишите второе число (B): ' + B + '<br/>');

for (var x = A; x <= B; x++) {
    result = result + x;
    document.write(x + ',');
}
document.write("<br/>");
document.write('Сумма всех чисел: ' + result);

document.write("<br/> <br/> <br/>");

for (var x = A; x <= B; x++) {
    if (x % 2 == 0 && x != 0) {
        document.write(x + ',');
            }
}
document.write(' :Все нечетные числа в промежутке от A до B');

document.write("<br/> <br/> <br/>");

for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 20; y++) {
        document.write("&nbsp;");
    }
    for (var y = (x + 0); y < 10; y++) {
        document.write("_");
    }
    for (var z = (x + 1); z > 0; z--) {
        document.write("&#9733;");
    }
    document.write("<br/>");
}
for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 20; y++) {
        document.write("&nbsp;");
    }
    for (var y = (x + 1); y > 0; y--) {
        document.write("_");
    }
    for (var z = (x + 0); z < 10; z++) {
        document.write("&#9733;");
    }
    document.write("<br/>");
}
document.write("<br/> <br/> <br/>");

for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 20; y++) {
        document.write("&nbsp;");
    }
    for (var y = (x + 1); y > 0; y--) {
        document.write("&#9733;");
    }
    document.write("<br/>");
}
document.write("<br/> <br/> <br/>");

for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 20; y++) {
        document.write("&nbsp;");
    }
    for (var y = (x + 0); y < 10; y++) {
        document.write("_");
    }
    for (var z = (x + 1); z > 0; z--) {
        document.write("&#9733;");
    }
    document.write("<br/>");
}
document.write("<br/> <br/> <br/>");

for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 20; y++) {
        document.write("&nbsp;");
    }
    for (var y = 0; y < 20; y++) {
        document.write("&#9733;");
    }
    document.write("<br/>");
}
document.write("<br/> <br/> <br/>");






























