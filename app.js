const express = require('express');
const app = express();
const port = 8080;
const cors = require ('cors');

const pop = require("./modules/popModule")


app.use(express.json());

app.use(cors())

app.get('/',(req, res) => {
    res.send('Welcome home');
})

app.use("/pop", pop);


app.listen(port, () => {
    console.log("node application is running on port " + port + " http://127.0.0.1:8080");
})