fetch('https://jsonplaceholder.typicode.com/users').then(responce =>
    responce.json().then(users =>{
        for (let user of users) {
            if (user.id) {
                localStorage.getItem('details');
                localStorage.removeItem('details');


            }
        }
        }
    ))
