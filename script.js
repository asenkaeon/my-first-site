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
