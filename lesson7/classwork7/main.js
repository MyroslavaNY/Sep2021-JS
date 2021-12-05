// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model,producer, year, speed, engine){
//     this.model = model ;
//     this. producer = producer;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//     this.drive = function (drive) {
//         return `${drive}їдемо зі швидкістю ${this.speed } км на годину`
//     };
//     this.info = function (info) {
//         return      `Модель - ${this.model};
//          виробник - ${this.producer} ;
//          рік випуску - ${this.year};
//          максимальна швидкість - ${this.speed} км/год;
//          об'єм двигуна - ${this.engine} к.с.`
//         };
//     this.increaseMaxSpeed = function (newSpeed){
//         return `${this.speed+newSpeed}`
//     };
//     this.changeYear = function (newValue) {
//         return `${this.year = newValue}`
//             };
//     this.addDrive = function (driver) {
//         this.driver = driver;
//     }
//
// }
// let car1 = new Car('XC90', 'Volvo', 2014, 230, 320, ['Oleg', 'Dima']);
// console.log(car1.drive("Ми "));
// console.log(car1.info(''));
// console.log(car1.increaseMaxSpeed(20));
// console.log(car1.changeYear(2020))


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//      constructor(model, producer, year, speed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.speed } км на годину`)
//
//     };
//     info  () {
//       console.log(`Модель - ${this.model};
//          виробник - ${this.producer} ;
//          рік випуску - ${this.year};
//          максимальна швидкість - ${this.speed} км/год;
//          об'єм двигуна - ${this.engine} к.с.`)
//         };
//     increaseMaxSpeed (newSpeed){
//         console.log(
//             `${this.speed+newSpeed}`        )
//     };
//     changeYear (newValue) {
//         console.log(`${this.year = newValue}`)
//             };
//     addDrive (driver) {
//         this.driver = driver;
//     }
// }
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Cinderella(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}
let cinderellas =[
    new Cinderella('Olga', 30, 38),
    new Cinderella('Dana', 20, 35),
    new Cinderella('Dara', 24, 37),
    new Cinderella('Lesya', 18, 39),
    new Cinderella('Katya', 19, 36),
    new Cinderella('Tanya', 31, 37),
    new Cinderella('Lilya', 22, 38),
    new Cinderella('Vira', 28, 39),
    new Cinderella('Dara', 26, 36),
    new Cinderella('Masha', 17, 38),
];
class Prince {
    constructor(name, age, sizeNum) {
        this.name = name;
        this.age = age;
        this.sizeNum = sizeNum;
    }
   }
let prince = new Prince('Vadym', 26, 35);
// let cinderellaFind =cinderellas.find(value => value.size === prince.sizeNum);
// console.log(cinderellaFind);
//
// for (let size of cinderellas) {
//        if (cinderellas.size === prince.sizeNum){
//         console.log(Cinderella)
//     }
// }


