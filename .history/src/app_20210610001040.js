require("dotenv").config();
const express = require('express');
require("./db/conn");
const hbs = require("hbs");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

const User = require("../models/usermessage");
// ====================== hbs files PATH ====================
const staticPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
// ===================== MIDDLEWARES =========================
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticPath));

app.set('view engine', 'hbs');
app.set("views", viewsPath); // views are now avaialable in viewsPath location
hbs.registerPartials(partialsPath);

app.get("/", function(req, res){
    // res.status(200).send("HELLO");
    res.render("index");
});

app.post("/contact", async function(req, res){
    // res.status(200).send("HELLO");
    try{

    }
    catch(err){
        res.status(500).send(err);
    }
    // res.render("index");
});

app.listen(port, () => {
    console.log(`===== LISTENING on PORT ${port} ======`);
});