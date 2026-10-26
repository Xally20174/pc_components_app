let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let selectedItem = "";
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        // Сбросить подсветку у всех кнопок
        buttons.forEach(function (b) {
            b.classList.remove("active");
        });
        btn.classList.add("active");

        // Запомнить выбор
        selectedItem = btn.dataset.id;
        const title = btn.dataset.title;

        // Показать главную кнопку с понятным текстом
        tg.MainButton.setText("Показать: " + title);
        tg.MainButton.show();
    });
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    if (selectedItem) {
        tg.sendData(selectedItem);
    }
});