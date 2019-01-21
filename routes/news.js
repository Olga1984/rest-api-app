const express = require('express');
const router = express.Router();

const myArray = [
    {
        id: '1',
        news: {
            "news": "first",
            "title": "zion resident"
        }
    },
    {
        id: '2',
        news: {
            "news": "first",
            "title": "resident"
        }
    },
    {
        id: '3',
        news: {
            "news": "first",
            "title": "zion"
        }
    },
    {
        id: '4',
        news: {
            "news": "first",
            "title": "zion"
        }
    },
    {
        id: '5',
        news: {
            "news": "first",
            "title": "zion"
        }
    }, {
        id: '6',
        news: {
            "news": "first",
            "title": "zion"
        }
    },
];

router.get('/news', function (req, res, next) {
    res.send(myArray);
});

router.get('/news/:id', function (req, res, next) {
    if (req.params.id === '0') {
        next('route');
    } else {
        next();
    }
}, function (req, res, next) {
    const id = req.params.id;
    const newsItem = myArray.find(item => item.id === id);
    //console.log(newsItem);
    res.send(newsItem);
});


router.post('/news', function (req, res, next) {
    const postItem = {
        id: req.body.id,
        news: req.body.news
    };
    const postArrayLength = myArray.push(postItem);
    console.log(postArrayLength);
    res.send(myArray);
});

//  req.body
// {
//     "id": "8",
//     "news": {
//     "news": "879",
//         "title": "1789"
// }
// }
router.put('/news/:id', function (req, res, next) {
    if (req.params.id === '0') {
        next('route');
    } else {
        next();
    }
}, function (req, res, next) {
    const updatedItem = {
        id: req.body.id,
        news: req.body.news
    };
    myArray[req.params.id - 1] = updatedItem;
    console.log(myArray);
    res.send(myArray);
});

router.delete('/news/:id', function (req, res, next) {
    if (req.params.id === '0') {
        next('route');
    } else {
        next();
    }
}, function (req, res, next) {
    const updatedArray = myArray.filter((item) => item.id !== req.params.id);
    res.send(updatedArray);

});

module.exports = router;
