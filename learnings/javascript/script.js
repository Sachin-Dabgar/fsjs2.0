let myHeros = ['thor', 'spiderman']
let dcHeros = ['batman', 'black adam', 'superman']

let heropower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)
}

myHeros.hitesh()


String.prototype.truelength = function() {
    console.log(`correct length is ${this.trim().length}`);
}

