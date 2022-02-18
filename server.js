const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(express.json());

app.use(cors({
    origin: "*"
}));

app.get("/projects", async function(req, res) {
    res.send("Hello!");
});

app.listen(PORT, function() {
    console.log("App listening on port http://localhost:4000/");
});