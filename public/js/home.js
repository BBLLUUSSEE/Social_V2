$(document).ready(() => {
    $.get("/api/posts", results => {
        outputPost(results, $(".postsContainer"))
    })
})