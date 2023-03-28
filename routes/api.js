const express = require('express');
const router = express.Router();
const Food = require('../models/foods');

router.get('/', (req, res) => {

    Food.find({ })
        .then((data) => {
            // console.log('Data:', data);
            if(data.length > 0){
                res.status(200).send(data);
            } else {
                res.status(404).send();
            }
        })
        .catch((error) => {
            res.status(500).send(error);
            console.log('error: ', error);
        });
})

router.post('/', async (req, res) => {
    // console.log(req.body);
    const newFood = new Food({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        avaliable: req.body.avaliable,
        description: req.body.description,
        image: req.body.image,
    });
})



module.exports = router;