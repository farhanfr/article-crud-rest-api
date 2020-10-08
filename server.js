const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./app/models");
const app = express();

let whitelist = [
    'https://localhost:8081',
];
let corsOption = {
    origin : function(origin,callback){
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null,true);
        }else{
            callback(new Error('not allowed by cors'));
        }
    }
};

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

db.sequelize.sync();

app.get("/",(req,res)=>{
    res.json({
        message:"welcome"
    });
})

//Route
require("./app/routes/article_routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})