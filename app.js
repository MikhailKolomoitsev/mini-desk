const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors=['#ff8c8c', '#8cb8ff', '#a3ffb3', '#dbb44f', '#cb8cff', '#ff78ac']

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color=getRandomColor()
    element.style.backgroundColor= color
    element.style.boxShadow= `0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
     element.style.boxShadow= `0 0 2px #111`
}

function getRandomColor() {
    const index=Math.floor(Math.random()*colors.length)
    return colors[index]
}