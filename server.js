const express = require('express');
const mongoose = require('mongoose');

const app = express();
const Food = require('./models/foods');
const morgan = require('morgan');
const routes = require('./routes/api');
const cors = require('cors');



mongoose.connect('mongodb://127.0.0.1:27017/the-table');

const db = mongoose.connection;
db.on("error",() =>  console.log('Conection error::'));
db.once("open", () => {
    console.log("Database connected");
})

// const food1 = new Food({
//     name: 'Chicken Butter Masala',
//     price: 270,
//     category: 'main-course',
//     avaliable: true,
//     description: 'A meal might include tandoori chicken, mild curry and basmati rice, and steamed vegetables.'
// })

// food1.save()
//     .then(() => console.log('Saved ...Yummy'))
//     .catch(() => console.log('Opps cannot save ERROR!!!!'))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));
app.use('/api', routes);



app.listen(8080, () => {
    console.log('YOUR SERVER IS SERVING AT 8080');
})