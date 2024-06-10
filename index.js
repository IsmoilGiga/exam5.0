let sanagich = 0;
let i = 0;
let input = document.querySelector("input");
let boshlash = document.querySelector(".boshlash");
let javob = document.querySelector(".javob");
let p = document.querySelector("p");

let savollar = ["2 - 2 = ?", "8 - 8 = ?", "5 * 4 = ?", "3 / 3 = ?"];
let javoblar = ["0", "0", "20", "1"];

boshlash.addEventListener("click", (event) => {
    event.preventDefault();

    p.textContent = savollar[0];
});

javob.addEventListener("click", (event) => {
    event.preventDefault();

    if (input.value === javoblar[i]) {
        sanagich = sanagich + 1;
    }

    i = i + 1;

    if (i === 4) {
        p.textContent = `Siz ${sanagich} togri javob berdingiz`;
        input.value = "";
        return;
    }

    input.value = "";

    p.textContent = savollar[i];
});