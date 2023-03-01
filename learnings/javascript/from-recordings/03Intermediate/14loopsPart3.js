const myStates = ['Rajasthan', 'Delhi', 'Assam', 1947, 'Tamil Nadu', 'Maharashtra']

for(const n of myStates)
{
    console.log(n)
}

const symbols = {
    yt: "youtube",
    fb: "facebook",
    ig: "instagram",
    lco: "learnCodeOnline"
}

for(const n in symbols){
    console.log(n)
    console.log(symbols[n])
}