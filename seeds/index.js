const mongoose = require('mongoose');
const Food = require('../models/foods');
const data = require('./data');

mongoose.connect('mongodb://127.0.0.1:27017/the-table');

const db = mongoose.connection;
db.on("error",() =>  console.log('Conection error::'));
db.once("open", () => {
    console.log("Database connected");
})

const seedDB = async () => {
    await Food.deleteMany({});
    console.log('Prev data deleted');

    for(let i = 0; i < 31; i++){
        const foodItem  = new Food({
            name: `${data[i].name}`,
            price: data[i].price,
            category: `${data[i].category}`,
            avaliable: data[i].avaliable,
            description: `${data[i].description}`,
            image: `${data[i].image}`
        })
        await foodItem.save();
    }
}

seedDB().then(() => {
    console.log('Finishing up Bye :)');
    mongoose.connection.close();
})









