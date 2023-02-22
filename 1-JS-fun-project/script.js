count = 0;
document.addEventListener('click', (event) => {
    const xCoordinate = event.clientX + "px"
    const yCoordinate = event.clientY + "px"
    const divElement = document.createElement('div')
    divElement.style.position = "absolute"
    divElement.style.borderRadius = "50%"
    divElement.style.color = "#ffffff"
    divElement.style.transform = 'translate(-50%,-50%)'
    divElement.style.left = xCoordinate
    divElement.style.top = yCoordinate
    divElement.textContent = ++count
    divElement.style.fontSize = "2rem"
    document.body.appendChild(divElement)
    setTimeout(() => {
        document.body.removeChild(divElement)
    }, 1500);
})
