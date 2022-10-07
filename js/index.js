const bookmarkButton = document.querySelector('[data-js="card__bookmark"]');
const cardAnswer = document.querySelector('[data-js="card__answer"]');
const showAnswerButton = document.querySelector('[data-js="card__button-answer"]');

bookmarkButton.addEventListener("click", function (){
    bookmarkButton.classList.toggle("bookmark--active");
});

showAnswerButton.addEventListener("click", () => {
    if (showAnswerButton.textContent === "Show answer") {
      cardAnswer.classList.add("card__answer--active");
      showAnswerButton.textContent = "Hide answer";
    } else {
      cardAnswer.classList.remove("card__answer--active");
      showAnswerButton.textContent = "Show answer";
    }
  });