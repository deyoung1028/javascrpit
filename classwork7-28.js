
const postsUL = document.getElementById("postsUL")

for (let index = 0; index < posts.length; index++) {
    const post = posts[index]

    const postItem = `
        <li>
            <b>${post.title}</b>
            <p>${post.body}</P>
        </li>
    `

    postsUL.insertAdjacentHTML('beforeend', postItem)
}