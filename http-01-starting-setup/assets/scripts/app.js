const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const xhr = new XMLHttpRequest();
const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');
// const xhr = new XMLHttpRequest();

// xhr.open('GET',"https://jsonplaceholder.typicode.com/posts");

// xhr.responseType = 'json';


// xhr.onload = function(){
//     // console.log(xhr.response);
//     //const listJson = xhr.response;  // In JSON format
//     //const listArray = JSON.parse(xhr.response);     // In JS friendly array format
//     const listdefault = xhr.response;
//     for(const post of listdefault){
//         const postEl = document.importNode(postTemplate.content,true);
//         postEl.querySelector('h2').textContent = post.title.toUpperCase();
//         postEl.querySelector('p').textContent = post.body;
//         listElement.append(postEl);
//     }
//     console.log(listdefault);
// }

// xhr.send();
// https://jsonplaceholder.typicode.com/posts
// Putting above logic into a function and promise as it it more usable
function sendHttpRequest(method, url, data) {

    const promise = new Promise((resolve, reject) => {
        xhr.open(method, url);

        xhr.responseType = 'json';


        xhr.onload = function () {
            resolve(xhr.response);
            // console.log(xhr.response);
            //const listJson = xhr.response;  // In JSON format
            //const listArray = JSON.parse(xhr.response);     // In JS friendly array format
            // const listdefault = xhr.response;
            // for (const post of listdefault) {
            //     const postEl = document.importNode(postTemplate.content, true);
            //     postEl.querySelector('h2').textContent = post.title.toUpperCase();
            //     postEl.querySelector('p').textContent = post.body;
            //     listElement.append(postEl);
            // }
            // console.log(listdefault);
        }

        xhr.send(JSON.stringify(data));
    });
    return promise;

}

async function fetchPosts() {
    const responseData = await sendHttpRequest('GET'
        , 'https://jsonplaceholder.typicode.com/posts')
    const listdefault = responseData;
    for (const post of listdefault) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        postEl.querySelector('li').id = post.id;
        listElement.append(postEl);
    }
    console.log(listdefault);

}

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    }
    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}


fetchBtn.addEventListener('click', fetchPosts)
form.addEventListener('click', event => {
    event.preventDefault();

    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent);
});

postList.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON'){
        // console.log('I am clicked');
        const postId = event.target.closest('li').id;
        // console.log(postId);
        sendHttpRequest('DELETE',`https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
})

// Also instead of XML type of fetching, we can use fetch() method to fetch data-
// Below is the implementation of sendHttp request if we use fetch() method to 'get' - 
// function sendHttpRequest(method,url,data){
//     return fetch(url).then( (response) => {
//         return response.json();
//     })
// }

// Fetch implemetation of post - 
// function sendHttpRequest(method,url,data){
//     return fetch(url,{
//        method: method,
//        body: JSON.toStringify(data)
// }).then( (response) => {
//         return response.json();
//     })
// }

// Adding headers in fetch() - 
// function sendHttpRequest(method,url,data){
//     return fetch(url,{
//        method:method,
//        headers:{
//            'Content-Type':'application/json'
//        },
//        body:JSON.stringify(data);
// }).then( (response) => {
//         return response.json();
//     })
// }