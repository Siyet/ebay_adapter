class CouchDBAdapter {
    constructor (opts) {
        this.opts = opts
    }
    static nano = require('nano')(this.opts.url);
    
}