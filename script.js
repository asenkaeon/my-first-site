<<<<<<< HEAD
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    document.body.insertAdjacentHTML(
        "beforeend",
        "<div class='message'>Йоу! Кнопка работает 😎</div>"
    );

    setTimeout(function() {
        document.querySelector(".message").remove();
    }, 3000);
});
=======
const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    document.body.insertAdjacentHTML(
        "beforeend",
        "<div class='message'>Йоу! Кнопка работает 😎</div>"
    );

    setTimeout(function() {
        document.querySelector(".message").remove();
    }, 3000);
});
>>>>>>> ba2db3ba39277c2851eb504f4b5dc7d7af21b044
