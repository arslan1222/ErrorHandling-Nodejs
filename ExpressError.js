class ExpressError extends Error {
    constructor(status, message){
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;

// Will not handle async await error.
// When an error throw asyncronously then express will not call the next() if it don't call to the next the error handling will not properly work
// We explicitly call to the async functions