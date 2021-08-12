
module.exports = cuotas => { 

    if(typeof(cuotas) === "number" ){
        return cuotas
    } 
    let cuotasNum = cuotas.map(cuota => Number(cuota))
    
    return Math.max(...cuotasNum);
}
