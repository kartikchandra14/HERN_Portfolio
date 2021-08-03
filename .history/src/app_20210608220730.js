require("dotenv").config();
const express = require('express');
require("./db/conn");
const hbs = require("hbs");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public")
// ===================== MIDDLEWARES =========================
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.static(staticPath));

app.set('view engine', 'hbs');

app.get("/", function(req, res){
    // res.status(200).send("HELLO");
    res.render("index");
})

app.listen(port, () => {
    console.log(`===== LISTENING on PORT ${port} ======`);
});