const one = () => {
    return "I am One"
}


const two = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve('credential correct') 
        }, 3000);
    })
}

const three = () => {
    return "redirect to home page"
}

const callMe = async() => {
    let valOne = one()
    console.log(valOne)

    let valTwo = await two()
    console.log(valTwo)

    let valThree = three()
    console.log(valThree)
}

callMe()