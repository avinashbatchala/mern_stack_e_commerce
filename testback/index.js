const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send("Hi Avinash");
});

app.get('/login', (req, res) => {
    return res.send("You are in login page")
});

app.get("/signout", (req, res) => {
    return res.send("You are at signout page");
});

app.get("/instagram", (req, res) => {
    return res.send("Avinash is using instagram")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})