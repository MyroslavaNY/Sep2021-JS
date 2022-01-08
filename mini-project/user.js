fetch('https://jsonplaceholder.typicode.com/users'+id).then(responce =>
    responce.json().then(users =>{
        for (let user of users) {
            if (user.id) {

                localStorage.getItem('details');
                // localStorage.removeItem('details');

                let divUser = document.createElement('div');
                let divUserId = document.createElement('div');
                divUserId.classList.add('userId')
                divUserId.innerText = `${user.id}`;

                divUser.append(divUserId);
                document.body.appendChild(divUser);
            }
        }
        }
    ))
