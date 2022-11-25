let inputOne = document.getElementById("inputOne")
let divOutput = document.getElementById("divOutput")

function showMessage(message) {
    divOutput.innerHTML = message
    divOutput.classList.remove("d-none")
    
}

document.getElementById("btnConverter").addEventListener
("click", () => {
    let c = parseFloat(inputOne.value)

    let f = c * 1.8 + 32

    let r = c * 1.8 + 491.67

    let k = c + 273.15

    showMessage(`<p>o ºF é ${f}</p><p>o K é ${k}</p><p>o Rº é ${r}</p>`)
})
