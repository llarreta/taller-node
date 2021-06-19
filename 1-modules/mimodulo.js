let maxTime = 22000;

module.exports = {
    time: maxTime,
    saludar: () => {
        //codigo 1
        //codigo 2
        console.log('Hola Mundo');
    },
    sumar: (a, b) => a + b,
    mostrar: a => a + 10
}

module.exports.saludar2 = function(){
    console.log('Otro saludo');
}

module.exports.time2 = maxTime;



