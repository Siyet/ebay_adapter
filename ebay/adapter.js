let rp = require('request-promise')
class EbayAdapter {
    constructor(opts){
        this.opts = opts
        this.headers = {
            "Accept": "application/json",
            "Accept-Charset": "utf-8",
            "Authorization": "Bearer " + opts.oauth_token_user,
            // "Accept-Encoding": "application/gzip",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
            "Content-Language": "en-US",
            "User-Agent": "Request-Promise"
        }
    }
    get orders() {
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
module.exports = EbayAdapter