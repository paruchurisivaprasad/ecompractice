const btnsubmit = document.getElementById("bamid");
const nav = document.getElementById("nav");

btnsubmit.addEventListener("click", () => {
    nav.classList.toggle("active");
    btnsubmit.classList.toggle("active");
});
