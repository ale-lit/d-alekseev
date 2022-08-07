document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".popup-container");
    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            popup.style.display = "flex";
        });
    });

    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
