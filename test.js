


let book = document.querySelector("#book");
let postcard = document.querySelector("#postcard");
let magazine = document.querySelector("#magazine")
let poster = document.querySelector("#poster");
let flyer = document.querySelector("#flyer");

book.addEventListener("click", () => {
    let items = document.querySelectorAll(".archive_grid a");

    items.forEach(item => {
        if (item.getAttribute("data-type") === "book") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

postcard.addEventListener("click", () => {
    let items = document.querySelectorAll(".archive_grid a");

    items.forEach(item => {
        if (item.getAttribute("data-type") === "postcard") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

magazine.addEventListener("click", () => {
    let items = document.querySelectorAll(".archive_grid a");

    items.forEach(item => {
        if (item.getAttribute("data-type") === "magazine") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

poster.addEventListener("click", () => {
    let items = document.querySelectorAll(".archive_grid a");

    items.forEach(item => {
        if (item.getAttribute("data-type") === "poster") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

flyer.addEventListener("click", () => {
    let items = document.querySelectorAll(".archive_grid a");

    items.forEach(item => {
        if (item.getAttribute("data-type") === "flyer") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

