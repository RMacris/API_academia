import moment from "moment"
export class AvaliacaoBaseDAO{ 
    constructor(avalInfo = {
         id: null,
         altura: 0.0, 
         peso: 0.0, 
         massaMuscular: 0.0, 
         taxaGordura:0.0,
         ombrosE: 0.0,
         ombrosD: 0.0,
         tricipalE: 0.0,
         tricipalD: 0.0, 
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
         gluteo: 0.0,
         user_id: 0,
         createdAt: 0.0,
         updatedAt: 0.0
    }) { 
        this.$id            = this.formatID(avalInfo.id)
        this.$altura        = this.format(avalInfo.altura)
        this.$peso          = this.format(avalInfo.peso)
        this.$massaMuscular = this.format(avalInfo.massaMuscular)
        this.$taxaGordura   = this.format(avalInfo.taxaGordura)
        this.$ombrosE        = this.format(avalInfo.ombrosE)
        this.$ombrosD        = this.format(avalInfo.ombrosD)
        this.$tricipalE      = this.format(avalInfo.tricipalE)
        this.$tricipalD      = this.format(avalInfo.tricipalD)
        this.$peitoral      = this.format(avalInfo.peitoral)
        this.$cintura       = this.format(avalInfo.cintura)
        this.$quadril       = this.format(avalInfo.quadril)
        this.$bracoE        = this.format(avalInfo.bracoE)
        this.$bracoD        = this.format(avalInfo.bracoD)
        this.$pernaE        = this.format(avalInfo.pernaE)
        this.$pernaD        = this.format(avalInfo.pernaD)
        this.$panturrilhaE  = this.format(avalInfo.panturrilhaE)
        this.$panturrilhaD  = this.format(avalInfo.panturrilhaD)
        this.$abdomem       = this.format(avalInfo.abdomem)
        this.$gluteo        = this.format(avalInfo.gluteo)
        this.$user_id       = this.formatID(avalInfo.user_id)
        this.$createdAt     = this.setTime()
        this.$updatedAt     = this.setTime()
    }
    /*
    this function make sure to format the input into a valido sql decimal (2,3)
    */
    format(val = 0.0) {
        if(typeof val != `number`) return 0.00
        if(val < 0) return 0.00
        if(val > Number.MAX_SAFE_INTEGER) { 
            // console.warn('The number ' + val + ' exceeds the max safe value')
            return 999.99
        }  
        return this.clamp(parseFloat(val.toFixed(2)), 0.00, 999.99)
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
    setTime() {
        return moment().format()
    }

    clamp(value, min, max) { 
        return Math.min(Math.max(value, min), max);
    }
}