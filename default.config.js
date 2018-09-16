import { EbayAdapter } from "./ebay/adapter";

export let config = {
    orders_adapters:[
        {
            adapter: new EbayAdapter({
                api_url: "https://api.sandbox.ebay.com/sell/fulfillment/v1/",
                oauth_token_app: "",
                oauth_token_user: "",
                app_id: "",
                dev_id: "",
                cert_id: ""
            })
        }
    ]
}