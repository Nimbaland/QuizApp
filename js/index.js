const bookmarkButton = document.querySelector('[data-js="card__bookmark"]');

bookmarkButton.addEventListener("click", function (){
    bookmarkButton.classList.toggle("bookmark--active");
});

