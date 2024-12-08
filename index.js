const express = require('express');
const app = express();

app.use(express.json());// add  middleware

require('dotenv').config();
const PORT = process.env.PORT || 5000;

const Routs = require('./routes/route');
app.use("/api/v1",Routs);
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});

const dbConnect = require('./config/dataBase');
dbConnect();

app.get('/',(req,res) => {
    res.send(`<h1>Welcome to the Todo API</h1>`);
})