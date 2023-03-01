const allColors = Array.from(document.querySelectorAll('.color'))
const center = document.querySelector('.center')

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}

const magicColorChanger = (element, color) => {
    element.addEventListener('mouseenter', () => {
        center.style.background = color
    })
}

allColors.forEach((color)=>{
    console.log(color)
    magicColorChanger(color, getBGColor(color))
})