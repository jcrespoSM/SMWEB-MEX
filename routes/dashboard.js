var router = require('express').Router();

router.get('/',  (req, res)=>{
    res.render('templates/dashboard');
})

module.exports = router;