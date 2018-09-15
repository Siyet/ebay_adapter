import {config} from "../config"
export class EbayAdapter {
    constructor(){
        this.auth = {
            "RequesterCredentials": {
                "eBayAuthToken": config.ebay.oauth_token
            }
        }
    }
    get_orders()
}