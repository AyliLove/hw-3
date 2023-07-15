// Задание 1 //

const password = 'пароль';

let input = prompt ('Введите пароль');


if (input === 'пароль') {
    console.log ('Пароль введен верно');
} else {
    console.log ('Пароль введен неправильно');
}

// Задание 2 //

 const c = Number(prompt(`Введите число: `));

 if (isNaN(c)) {
   console.log(`Вы ввели не число`);
 } else {
   c > 0 && c < 10 ? console.log("Верно") : console.log("Неверно");
 }

// Задание 3 //

const d = Number(prompt(`Введите первое число: `));

const e = Number(prompt(`Введите второе число: `));

 if (isNaN(d) || isNaN(e)) {
   console.log(`Вы ввели не число`);
 } else {
   d > 100 || e > 100 ? console.log("Верно") : console.log("Неверно");
 }

// Задание 4 //

let a = '2';
let b = '3';
//Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
alert (Number(a) + Number(b));

// Задание 5 //

alert('Exercise 5');
 const monthNumber = Number(prompt(`Введите номер месяца: `));
 if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
   console.log(`Вы ввели некорректный номер месяца`);
 } else {
   switch (monthNumber) {
     case 1:
     case 2:
     case 12:
       console.log(`Winter`);
       break;
     case 3:
     case 4:
     case 5:
       console.log(`Spring`);
       break;
     case 6:
     case 7:
     case 8:
       console.log(`Summer`);
       break;
     case 9:
     case 10:
     case 11:
       console.log(`Autumn`);
       break;
     default:
       break;
   }
 }