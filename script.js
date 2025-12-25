const dogBtn = document.getElementById("dogBtn");
const catBtn = document.getElementById("catBtn");
const result = document.getElementById("result");

const API_KEY = "demo";

dogBtn.addEventListener("click", () => {
    fetch("https://api.thedogapi.com/v1/images/search", {
        headers: {
            "x-api-key": API_KEY
        }
    })
    .then(res => res.json())
    .then(data => {
        result.innerHTML = `
            <h2>🐶 Köpek</h2>
            <img src="${data[0].url}" alt="Köpek">
        `;
    })
    .catch(() => {
        result.innerHTML = "<p>Bir hata oluştu.</p>";
    });
});

catBtn.addEventListener("click", () => {
    fetch("https://api.thecatapi.com/v1/images/search", {
        headers: {
            "x-api-key": API_KEY
        }
    })
    .then(res => res.json())
    .then(data => {
        result.innerHTML = `
            <h2>🐱 Kedi</h2>
            <img src="${data[0].url}" alt="Kedi">
        `;
    })
    .catch(() => {
        result.innerHTML = "<p>Bir hata oluştu.</p>";
    });
});
