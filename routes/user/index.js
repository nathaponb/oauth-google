const express = require('express');
const router = express.Router();
const Controllers = require('../../controllers/index');

router.get('/', Controllers.CheckAuthenticate, (req, res) => {
    res.render('user');
})

module.exports = router;