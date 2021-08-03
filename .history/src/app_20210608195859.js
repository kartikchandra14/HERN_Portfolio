require("dotenv").config();
const express = require('express');
require("./db/conn");
const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public")
// ===================== MIDDLEWARES =========================
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use(express.static(staticPath));

app.get("/", function(req, res){
    res.status(200).send("HELLO");
})

app.listen(port, () => {
    console.log(`===== LISTENING on PORT ${port} ======`);
});