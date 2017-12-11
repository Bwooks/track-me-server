const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.contentType("application/json");
    next();
})

app.get("/", (req, res) => {
    res.send({message: "HELLO"});
});
app.listen(8080, () => {
    console.log("WOOT");
});