
export default class Avaliacao {
    constructor( aval_Info = {
        altura: 0.0, 
        peso: 0.0, 
        massaMuscular: 0.0, 
        taxaGordura:0.0,
        tricipal: 0.0,
        peitoral: 0.0,
        cintura: 0.0,
        quadril: 0.0,
        bracoE: 0.0,
        bracoD: 0.0,
        pernaE: 0.0,
        pernaD: 0.0,
        panturrilhaE: 0.0,
        panturrilhaD: 0.0,
        abdomem: 0.0,
        gluteo: 0.0
    }) 
        {
            this.altura         = this.format(aval_Info.altura),
            this.peso           = this.format(aval_Info.peso),
            this.massaMuscular  = this.format(aval_Info.massaMuscular),
            this.taxaGordura    = this.format(aval_Info.taxaGordura),
            this.tricipal       = this.format(aval_Info.tricipal),
            this.peitoral       = this.format(aval_Info.peitoral),
            this.cintura        = this.format(aval_Info.cintura),
            this.quadril        = this.format(aval_Info.quadril),
            this.bracoE         = this.format(aval_Info.bracoE),
            this.bracoD         = this.format(aval_Info.bracoD),
            this.pernaE         = this.format(aval_Info.pernaE),
            this.pernaD         = this.format(aval_Info.pernaD),
            this.panturrilhaE   = this.format(aval_Info.panturrilhaE),
            this.panturrilhaD   = this.format(aval_Info.panturrilhaD),
            this.abdomem        = this.format(aval_Info.abdomem),
            this.gluteo         = this.format(aval_Info.glutero)
    }

    
    /*
        this function make sure to format the input into a valido sql decimal (2,3)
    */
    format(val = 0.0) {
        if(typeof val != `number`) return 0.00
        if(val < 0) return 0.00
        if(val > Number.MAX_SAFE_INTEGER) { 
            console.warn('The number ' + val + ' exceeds the max safe value')
            return 0.00
        }  

        return parseFloat(val.toFixed(2))
    }

}
