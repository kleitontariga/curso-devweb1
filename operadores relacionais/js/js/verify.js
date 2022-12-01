let yearOfBirth = document.getElementById("yearOfBirth")
let feedback = document.getElementById("feedback")
let withMajor = document.getElementById("withMajor")
let year = new Date().getFullYear()


document.getElementById("btnVerify").addEventListener("click",() => {
    let inputValue = yearOfBirth.value 
    let maxYear = new Date().getFullYear() - 100

    if(inputValue == "") {
        // Se for verdade faz isso aqui
        yearOfBirth.classList.add("is-invalid")
        feedback.innerText = "O campo não pode ficar em branco!!!"
    } else if (parseInt(InputEvent) < maxYear) {
        yearOfBirth.classList.add("is-invalid")
        feedback.innerText = `A data informada é inferior ao ano ${maxYear}!!`
    }
    
    else {
        yearOfBirth.classList.remove("is-invalid")
        yearOfBirth.classList.add("is-valid")

        let age = new Date().getFullYear() - parseInt(inputValue) 
        verifyAccess(age)
    }

})

function verifyAccess(age) {
    if (age >= 18) {
        alert("Seja bem-vindo ao nosso sistema")
    } else if (age >=16 && withMajor.checked) {
        alert("Seja bem-vindos ao nosso sistema")
    }
    else {
        alert("Lamento, você não está autorizado a entrar!")
    }
    yearOfBirth.classList.remove("is-valid")
}