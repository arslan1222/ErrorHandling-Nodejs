const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

/*
app.use((req, res, next)=>{
    let {token} = req.query;
    if(token == "giveaccess"){
        next();
    }

    throw new Error("Access Denied!");
});
*/

// Custom error class

const accessToken = (req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "Access Denied!");
}

app.get("/api", accessToken, (req, res)=>{
    res.send("Our Data");
})

app.get("/err", (req, res, next)=>{
    dfdf =fgd;
})

// Send the error to client side

app.use((err, req, res, next)=>{
    let { status = 500, message = "Some error occured"} = err;
    res.send(status).send(message);
})

app.get("/", (req, res)=>{
    res.send("I am root")
})

// Generate a forbidden error
app.get("/admin", (req, res)=>{
    throw new ExpressError(403, "Access to Admin is forbidden");
})

app.listen(9999, ()=>{
    console.log("Server is running");
})