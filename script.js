const container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    // console.log(response);
    const data = await response.json();
    // console.log(data[0].body);

    data.map((curElem, index) => {
        const htmlData = `<div class="posts">
            <p class="post-id">${postCount++}</p>
            <h2 class="title">${curElem.title}</h2>
            <p class="post-info">${curElem.body}</p>
        </div>`;

        container.insertAdjacentHTML('beforeend', htmlData);
    })
}

getPost();

const showData = () => {
    setTimeout(() => {
        pageCount++;
        getPost();
    }, 300);
}

window.addEventListener('scroll', () => {
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
        console.log('I am at bottom')
        showData();
    }
})