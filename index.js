const links = document.querySelectorAll("li");
const elements = document.querySelectorAll("h1, h3, section");


links.forEach(link => {
    link.addEventListener("click", evt => {
        elements.forEach(element => {
            element.classList.add("hidden");
            const visible = document.querySelectorAll(`.${evt.target.id}`);
            visible.forEach(element => {
                element.classList.remove("hidden");
            })
        })
    })
})
