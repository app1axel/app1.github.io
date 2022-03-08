const express = require('express');
const router = express.Router();

var data = {
    "Bubble": {
        "name": "Bubble",
        "dob": "13/01/2020",
        "imageurl": "/images/fish.png",
        "hobbies": ["Swim", "Swim but better", "Swiiiim"]
    },

    "Rex": {
        "name": "Rex",
        "dob": "27/02/2013",
        "imageurl": "/images/dog.png",
        "hobbies": ["Ball", "Eat", "Run"]
    },

    "Pixel": {
        "name": "Pixel",
        "dob": "01/07/2016",
        "imageurl": "/images/cat.png",
        "hobbies": ["Hugs", "Naps", "Play time"]
    }
}

router.get('/addnew', (req, res) => {
    console.log("Data sent via post");
    var fname = req.query.firstname;
    var sname = req.query.surname;
    console.log('Date entered ' + fname + ' ' + sname);
    res.render('personform')
})

router.post('/addnew', (req, res) => {
    console.log("Data sent via post");
    console.table(req.body);
    res.redirect(303, 'personadded',)
})

router.get('/personadded', (req, res) => {
    res.render('personadded')
})

router.get('/:name', (req, res) => {
    var name = req.params.name;
    if (data[name]) {
        res.render('person', { person: data[name] });
    }
    else {
        res.status(404);
        res.render('404');
    }
})

router.get('/', (req, res) =>
    res.render('listing', { personlist: data }))

module.exports = router;