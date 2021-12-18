// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі
//     поточного поста

fetch(' https://jsonplaceholder.typicode.com/posts').then(value => {
    value.json().then(posts =>{
        for (let post of posts) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            let postId = document.createElement('div');
            postId.innerText = `${post.id}`;
            let postTitle = document.createElement('div');
            postTitle.innerText = `${post.title}`;
            let postBody = document.createElement('div');
            postBody.innerText = `${post.body}`;
            let postBtn = document.createElement('button');
            postBtn.innerText = 'comments'
            postBtn.onclick = function () {
               fetch('https://jsonplaceholder.typicode.com/posts/${post.id}/comments')
                   .then(value => value.json()
                       .then(comments =>{
                           let commentsDiv = document.createElement('div');
                           commentsDiv.classList.add('comments');

                           for (let comment of comments) {
                            let commentDiv = document.createElement('div') ;
                            commentDiv.classList.add('comment');
                            commentDiv.innerText = comment;
                                 commentsDiv.appendChild(commentDiv);
                           }
                           postDiv.appendChild(commentsDiv);

               }))
            }
            postDiv.append(postId, postTitle, postBody, postBtn)
            document.body.appendChild(postDiv)
        }
    })
})
