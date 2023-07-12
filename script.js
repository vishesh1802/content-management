window.onload = function() {
    // Fetch blog posts from the server
    fetch('/api/posts')
        .then(response => response.json())
        .then(posts => displayPosts(posts))
        .catch(error => console.error(error));
};

function displayPosts(posts) {
    const blogList = document.getElementById('blog-list');

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';

        const title = document.createElement('h2');
        title.innerText = post.title;

        const content = document.createElement('p');
        content.innerText = post.content;

        postDiv.appendChild(title);
        postDiv.appendChild(content);

        blogList.appendChild(postDiv);
    });
}
