const mongoose = require('mongoose');
const dbConfig = require("../config/dev")
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const db = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
// db.mongoose = mongoose;
// db.url = dbConfig.url;
useUnifiedTopology:true,
useNewUrlParser: true,
useCreateIndex: true
})
console.log(`mongo database is connected!!! ${conn.connection.host} `)
}catch(error){
console.error(`Error: ${error} `)
process.exit(1) //passing 1 - will exit the proccess with error
}
}

module.exports = db;