// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let blockDiv = document.createElement('div');
// blockDiv.classList.add('wrap');
// blockDiv.classList.add('collapse');
// blockDiv.classList.add('alpha');
// blockDiv.classList.add('beta');
// blockDiv.style.background = 'white';
// blockDiv.style.color = 'blue';
// blockDiv.style.fontSize = '20px';
// blockDiv.innerText = 'Tell me';
// document.body.appendChild(blockDiv);
// let cloneBlockDiv = blockDiv.cloneNode(true);
// document.body.appendChild(cloneBlockDiv)

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного
// елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let arr =  ['Main','Products','About us','Contacts'];
// let blockMenu = document.getElementsByClassName('menu')[0];
// arr.forEach(item=>{
//     let liElement = document.createElement('li');
//     liElement.innerText = item
//     blockMenu.appendChild(liElement)
// })

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.forEach(value => {
//     let blockDiv = document.createElement('div');
//     let text = '';
//     for (let key in value) {
//         text +=`-${key}:${value[key]}`
//     }
//     blockDiv.innerText = text
//     document.body.appendChild(blockDiv)
// })
// Для кожного елементу масиву зробити блок в якому вивести інформацію
// про title та monthDuration
// Завдання робити через цикли.



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.forEach(value => {
//     let blockDiv = document.createElement('div');
//     blockDiv.classList.add('item')
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading')
//     let p = document.createElement('p');
//     p.classList.add('description')
//     h1.innerText = value.title
//     p.innerText = value.monthDuration
//     blockDiv.append(h1,p)
//     document.body.appendChild(blockDiv)
// })
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
