let rp = require('request-promise')
class UPSAdapter {
    constructor(opts){
        this.opts = opts
    }
    get addressValidation() {
        return rp({ uri: this.opts.api_url + "order",
            headers: this.headers,
            json: true })
            .then(resp=>resp)
            .catch(err=>{
                console.error(err.error.errors)
                return []
            })

    }
}
module.exports = UPSAdapter