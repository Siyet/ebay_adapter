let config = require("./config")
config.orders_adapters.forEach(async adapter=>{
    console.log(await adapter.adapter.orders)
})
// console.log(config)