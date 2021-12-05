// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id =id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users= [
    new User(1, 'Olga', 'Lapa', 'lapa@gmail.com', '0505050505' ),
    new User(2, 'Vira', 'Zepa', 'zepa@gmail.com', '0635050505' ),
    new User(3, 'Roman', 'Livas', 'livas@gmail.com', '0965050505' ),
    new User(4, 'Viktor', 'Pumpum', 'pumpum@gmail.com', '0975050505' ),
    new User(5, 'Dima', 'Les', 'les@gmail.com', '0985050505' ),
    new User(6, 'Tanya', 'Upa', 'Upa@gmail.com', '0995050505' ),
    new User(7, 'Olga', 'Skan', 'Skan@gmail.com', '0505050503' ),
    new User(8, 'Sasha', 'Pan', 'Pan@gmail.com', '0505050508' ),
    new User(9, 'Kolya', 'Calsa', 'Calsa@gmail.com', '0505090505' ),
    new User(10, 'Nata', 'Pres', 'Pres@gmail.com', '0505050605' )
];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUsers = users.filter(value => value.id%2 ===0);
// console.log(filterUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortUsers = users.sort((a,b)=> a.id - b.id);
// console.log(sortUsers);
// let sortUsersUp = users.sort((a,b)=> b.id - a.id);
// console.log(sortUsersUp)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
 class Client {
     constructor(id, name, surname, email, phone, order) {
         this.id = id;
         this.name = name;
         this.surname = surname;
         this.email = email;
         this.phone = phone;
         this.order = order;
     }
 }

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(1, 'Olga', 'Lapa', 'lapa@gmail.com', '0505050505', ['sweet', 'cola']),
    new Client(2, 'Vira', 'Zepa', 'zepa@gmail.com', '0635050505', ['car', 'bag', 'bike'] ),
    new Client(3, 'Roman', 'Livas', 'livas@gmail.com', '0965050505', ['egg', 'bread'] ),
    new Client(4, 'Viktor', 'Pumpum', 'pumpum@gmail.com', '0975050505', ['cola', 'sneaks'] ),
    new Client(5, 'Dima', 'Les', 'les@gmail.com', '0985050505', ['sweet','games', 'puzzle']),
    new Client(6, 'Tanya', 'Upa', 'Upa@gmail.com', '0995050505', ['rom', 'water', 'cheese'] ),
    new Client(7, 'Olga', 'Skan', 'Skan@gmail.com', '0505050503', ['toys', 'sweet', 'cake'] ),
    new Client(8, 'Sasha', 'Pan', 'Pan@gmail.com', '0505050508' ,['bike', 'bread', 'butter']),
    new Client(9, 'Kolya', 'Calsa', 'Calsa@gmail.com', '0505090505',['ice-cream', 'cola'] ),
    new Client(10, 'Nata', 'Pres', 'Pres@gmail.com', '0505050605', ['water', 'milk', 'eggs', 'basket'] )
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((a,b)=> a.order.length - b.order.length);
console.log(sortClients)
