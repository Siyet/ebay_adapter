let request = require('request-promise')
class EbayAdapter {
    constructor(opts){
        this.headers = {
            "Accept": "application/json",
            "Accept-Charset": "utf-8",
            "Authorization": "Bearer " + opts.oauth_token_user,
            "Accept-Encoding": "application/gzip",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
            "Content-Language": "en-US",
            "User-Agent": "Request-Promise"
        }
    }
    get orders() {
        return request({
            uri: opts.api_url + "order",
            headers: this.headers,
            json: true
        })
    }
}
module.exports = EbayAdapter