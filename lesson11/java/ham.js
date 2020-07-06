(function () {
    const menu = document.querySelectorAll(".navigation")[0];
    document.getElementById("menu-button").addEventListener("click", () => {
       menu.classList.toggle("responsive");
    });
 })();