//Importing Server Files
const express = require("express");
const app = express();

//Importing CORS;
const cors = require("cors")

//Importing dotenv to read .env files
const dotenv = require("dotenv")

//Using CORS
app.use(cors());

//Function run to read .env properties
dotenv.config();

app.get("/download-resume", (req, res) => {
    return res.download("./Neeraj Gandhi_Resume.pdf")
})

//Initialising Server
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})
