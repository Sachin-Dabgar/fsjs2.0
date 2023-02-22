const btn = document.querySelector('#button')

const randomColor = () => {
    let val = "0123456789ABCDEF"
    let cons = '#';

    for(let i = 0; i<6; i++){
        // console.log(Math.floor(Math.random() * 16))
        cons = cons + val[Math.floor(Math.random() * 16)]
    }

    // console.log(cons)
    return cons;

    
}

btn.addEventListener("click", () => {
    let cons = randomColor()
    document.body.style.backgroundColor = cons
})













