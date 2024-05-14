const mongoose = require('mongoose');

const DB = "assistanceDB"

mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`)

.then(()=>console.log(`Connected to ${DB} database!`))
.catch((err)=>console.log(err));          

/*

const mongoose = require("mongoose")

const dbName = process.env.DB

mongoose.connect(`mongodb://127.0.0.1:3000/${dbName}`)
    .then(() => console.log(`📡📡📡 Established a connection to the ${dbName} database`))
    .catch(err => console.log("❌❌❌❌ Something went wrong when connecting to the database", err));*/