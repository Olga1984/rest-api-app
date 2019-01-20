const express = require('express');
const router = express.Router();

router.get('/news', function (req, res, next) {
    res.send({type: 'Get'});
});

router.get('/news/:id', function (req, res, next) {
    if (req.params.id === '0'){next('route');}
    else { next();}
}, function (req, res, next) {
    res.send('news_' + req.params.id);
});

// {
//     "news": "first",
//     "title": "zion resident"
// }

router.post('/news', function (req, res, next) {
   // console.log(req.body);
    res.send({
        type: 'POST',
        news: req.body.news,
        title: req.body.title
    });
});

router.put('/news/:id', function (req, res, next) {
    if (req.params.id === '0'){next('route');}
else { next();}
}, function (req, res, next) {
        res.send({
            type: 'PUT',
            id: req.params.id,
            news: req.body.news,
            title: req.body.title
        });
});

router.delete('/news/:id', function (req, res, next) {
    if (req.params.id === '0'){next('route');}
    else { next();}
}, function (req, res, next) {
    res.send('deleted_news_' + req.params.id);

});

module.exports = router;