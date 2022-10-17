const button = document.getElementById("button")
const color = document.getElementById("color")
const changeColor = document.querySelector("body")
const copy = document.getElementById("fa-copy")
let colorValue = color.textContent
let newColorHexa

// ATRIBUINDO SISTEMA HEXADECIMAL
button.addEventListener("click", function() {
    newColorHexa = hexaColorCode()
    color.textContent = newColorHexa
    changeColor.style.backgroundColor = newColorHexa
})

// FUNÇÃO PARA COPIAR O CÓDIGO HEXADECIMAL DAS CORES
copy.addEventListener("click", function() {
    if(color.textContent === "#f1f5f8") {
        navigator.clipboard.writeText(colorValue)
        window.alert("Código copiado com sucesso!")
    }
    else {
        navigator.clipboard.writeText(newColorHexa)
        window.alert("Código copiado com sucesso!")
    }
})

// FUNÇÃO PARA GERAR SISTEMA HEXADECIMAL
function hexaColorCode() {
    let hexaCode = "123456789abcdef"
    let maxLength = 6
    let newHexaCode = ""
    
    for(let i = 0; i < maxLength; i ++) {
        const randomChoice = Math.floor(Math.random() * hexaCode.length)
        newHexaCode += hexaCode.substring(randomChoice, randomChoice + 1)
    }
    return "#" + newHexaCode
}