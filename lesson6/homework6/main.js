// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world ';
// for (let strElement of str) {
//     console.log(strElement)
// }
// console.log( str.length)   ;
//
// let str2 = 'lorem ipsum';
// for (let str2Element of str2) {
//     console.log(str2Element)
//    }
// console.log(str2.length);

// let str3 = 'javascript is cool';
// for (let str3Element of str3) {
//     console.log(str3Element)
// }
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
//
// let word = 'lorem ipsum';
// let toUpperCase1 =word.toUpperCase();
// console.log(toUpperCase1);
//
// let string= 'javascript is cool';
// let toUpperCase2 =string.toUpperCase();
// console.log(toUpperCase)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'HELLO WORLD';
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);
//
// let str2 = 'LOREM IPSUM';
// let toLowerCase2 = str2.toLowerCase();
// console.log(toLowerCase2);
//
// let str3 = 'JAVASCRIPT IS COOL';
// let toLowerCase3 = str3.toLowerCase();
// console.log(toLowerCase3)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   ';
// console.log(str.length)
// let trim = str.trim();
// console.log(trim)
// console.log(trim.length)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) => str.split(' ');
// console.log(stringToarray(str))

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => str.substring(0,length);
// document.write(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = 'HTML JavaScript PHP';
// let insert_dash = (str) => str.replaceAll(' ', '-').toUpperCase();
// console.log(insert_dash(str))


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let str = 'HTML JavaScript PHP';
// let insertStr = (str) => str[0].toUpperCase()+str.slice(1);
// console.log(insertStr(str))

//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'Каждый охотник желает знать';
// let capitalize =(str) => str[0].toUpperCase().split(' ')+str.substring(1);
// console.log(capitalize(str))
