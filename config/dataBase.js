const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
   .then(()=> console.log('Connected to MongoDB'))
   .catch(err=>{
        console.error(err);
        console.log(err.message);
        process.exit(1);
   });
}
module.exports = dbConnect;