const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // console.log('connecting to the database')

        //connect to the database
        await mongoose.connect(process.env.DB_URL);
    }catch(err){
        console.log('Error while connecting database: ', err);
    }
}

module.exports = connectDB;

