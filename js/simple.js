const colors = ["green", "red", "yellow", "blue", "gray", "purple", "orange", "pink"]
const button = document.getElementById("button")
const color = document.getElementById("color")
const changeColorBody = document.querySelector("body")
const copy = document.getElementById("fa-copy")
let colorText = color.textContent
let newColor

// ATRIBUINDO A FUNÇÃO CORES ALEATÓRIAS
button.addEventListener("click", function() {
    newColor = colorsRandom()
    color.textContent = colors[newColor]
    changeColorBody.style.backgroundColor = colors[newColor]
})

// FUNÇÃO PARA COPIAR AS CORES GERADAS
copy.addEventListener("click", function() {
    if(color.textContent === "#f1f5f8") {
        navigator.clipboard.writeText(colorText)
        window.alert("Código copiado com sucesso!")
    }
    else {
        navigator.clipboard.writeText(colors[newColor])
        window.alert(`Cor ${colors[newColor]} copiada com sucesso!`)
    }
})

// FUNÇÃO PARA GERAR CORES ALEATÓRIAS
function colorsRandom() {
    return Math.floor(Math.random() * colors.length)
}