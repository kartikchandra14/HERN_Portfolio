const mongoose = require('mongoose');
const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl, {
    useNewUrlParser : true,
    // useFindAndModify : true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => {
    console.log("Connected TO DataBase");
})
.catch((error) => {
    console.error("== ERROR ==>", error.message);
});