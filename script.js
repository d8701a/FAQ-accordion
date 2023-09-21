const questions = document.querySelectorAll(".accordion-header");
const answers = document.querySelectorAll(".accordion-content");
const arrows = document.querySelectorAll(".arrow");

questions.forEach(function(question, i) {
    question.addEventListener("click", function() {
       
    /* loop through questions again to eliminate
        inactive/unclicked questions, because the
        clicked questions will have the i- value*/
        questions.forEach((question2, i2) => {
            if (i2 !== i) {
                question2.classList.remove("active")
            }
        })
        /* add/remove class from the clicked question*/
       question.classList.toggle("active");
        /* add/remove rotation from the arrows*/ 
       arrows[i].classList.toggle("rotate-arrow");

       answers.forEach((answer, answerIndex) => {
            if(answerIndex !== i) {
                answer.classList.add("hidden");
                arrows[answerIndex].classList.remove("rotate-arrow");
            };
        });

        /*add/remove class from THE SAME clicked answer*/
    answers[i].classList.toggle("hidden");

});
});
