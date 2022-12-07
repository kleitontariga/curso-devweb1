let h1Element = document.querySelector("h1")
let h2Elements = document.querySelectorAll("h2")
let paragraph = document.querySelectorAll("p")

document.querySelector("#darkMode").addEventListener("click", () => {
    document.body.classList.add("bg-dark")
    document.body.classList.remove("bg-light")

    h1Element.classList.add("text-white")
    h1Element.classList.remove("text-dark")

    h2Elements.forEach(
        (element) => {
            element.className.add("text-white")
            element.className.remove("text-dark")
        }
    )

    paragraph.forEach(
        (element) => {
            element.classList.add("text-white")
            element.classList.remove("text-white")
        }
    )
})