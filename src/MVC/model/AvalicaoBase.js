export default class AvaliacaoBase{ 
    constructor(avalInfo = {
        $id: null,
        $altura: 0.0, 
        $peso: 0.0, 
        $massaMuscular: 0.0, 
        $taxaGordura:0.0,
        $tricipal: 0.0,
        $peitoral: 0.0,
        $cintura: 0.0,
        $quadril: 0.0,
        $bracoE: 0.0,
        $bracoD: 0.0,
        $pernaE: 0.0,
        $pernaD: 0.0,
        $panturrilhaE: 0.0,
        $panturrilhaD: 0.0,
        $abdomem: 0.0,
        $gluteo: 0.0
    }) {
        this.$id          = this.formatID(avalInfo.$id),
        this.$altura        = this.format(avalInfo.$altura),
        this.$peso          = this.format(avalInfo.$peso),
        this.$massaMuscular = this.format(avalInfo.$massaMuscular),
        this.$taxaGordura   = this.format(avalInfo.$taxaGordura),
        this.$tricipal      = this.format(avalInfo.$tricipal),
        this.$peitoral      = this.format(avalInfo.$peitoral),
        this.$cintura       = this.format(avalInfo.$cintura),
        this.$quadril       = this.format(avalInfo.$quadril),
        this.$bracoE        = this.format(avalInfo.$bracoE),
        this.$bracoD        = this.format(avalInfo.$bracoD),
        this.$pernaE        = this.format(avalInfo.$pernaE),
        this.$pernaD        = this.format(avalInfo.$pernaD),
        this.$panturrilhaE  = this.format(avalInfo.$panturrilhaE),
        this.$panturrilhaD  = this.format(avalInfo.$panturrilhaD),
        this.$abdomem       = this.format(avalInfo.$abdomem),
        this.$gluteo        = this.format(avalInfo.$gluteo)
    }
    /*
    this function make sure to format the input into a valido sql decimal (2,3)
    */
    format(val = 0.0) {
        if(typeof val != `number`) return 0.00
        if(val < 0) return 0.00
        if(val > Number.MAX_SAFE_INTEGER) { 
            // console.warn('The number ' + val + ' exceeds the max safe value')
            return 0.00
        }  
        return parseFloat(val.toFixed(2))
    }
    formatID(val = 0){ 
        if(typeof val != `number`) return null
        if(val < 1) return null
        if(val > Number.MAX_SAFE_INTEGER) { 
            // console.warn('The number ' + val + ' exceeds the max safe value')
            return null
        } 
        return parseInt(val)
    }
}