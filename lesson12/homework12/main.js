// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts').then (response =>
//     response.json().then(posts =>{
//         for (let post of posts) {
//             let divElement = document.createElement('div');
//             divElement.classList.add('post');
//             let postUserId = document.createElement('div');
//             postUserId.innerText = `${post.userId}`;
//             let postId = document.createElement('div');
//             postId.innerText = `${post.id}`;
//             let postTitle = document.createElement('div');
//             postTitle.innerText = `${post.title}`;
//             let postBody = document.createElement('div');
//             postBody.innerText = `${post.body}`;
//             divElement.append(postUserId, postId, postTitle, postBody);
//             document.body.appendChild(divElement)
//         }
// }))


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments



fetch('https://jsonplaceholder.typicode.com/comments').then(response =>
    response.json().then(comments =>{
        for (let comment of comments) {
            let divComment = document.createElement('div');
            divComment.classList.add('comment');
            let commentPostId = document.createElement('div');
            commentPostId.innerText = `${comment.postId}`;
            let commentId = document.createElement('div');
            commentId.innerText = `${comment.id}`;
            let commentName = document.createElement('div');
            commentName.innerText = `${comment.name}`;
            let commentEmail = document.createElement('div');
            commentEmail.innerText = `${comment.email}`;
            let commentBody = document.createElement('div');
            commentBody.innerText = `${comment.body}`;

            divComment.append(commentPostId, commentId, commentName, commentEmail, commentBody);
            document.body.appendChild(divComment);
        }

    })
)
