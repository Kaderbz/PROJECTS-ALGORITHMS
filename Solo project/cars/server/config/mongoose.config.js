const mongoose = require('mongoose');

const DB = process.env.DB

mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`)

.then(()=>console.log(`Connected to ${DB} database!`))
.catch((err)=>console.log(err));