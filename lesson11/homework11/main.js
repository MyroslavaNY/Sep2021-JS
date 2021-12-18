// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let f1 = document.forms.f1;
// f1.onsubmit = function (e) {
//     e.preventDefault();
//     let name = this.name.value;
//     let age = this.age.value;
//     console.log(name, age);
//     localStorage.setItem('userAge', JSON.stringify({name,age}));
//
// };

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
// let f2 = document.forms.f2;
//
//     f2.onsubmit = function (e) {
//     e.preventDefault();
//     let model = this.model.value;
//     let type = this.type.value;
//     let volume = this.volume.value;
//     let car = {model, type, volume}
//     console.log(car);
//     let cars = JSON.stringify(localStorage.getItem('cars'));
//         cars=[];
//     if (!cars){
//         cars.push(car);
//         localStorage.setItem('cars', JSON.stringify(cars));
//     } else {
//         cars.push(car);
//         localStorage.setItem('cars', JSON.stringify(cars));
//     }
// }

