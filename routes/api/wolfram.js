const express = require('express');
const router = express.Router();
const wolframCtrl = require('../../controllers/wolfram');

/*---------- Public Routes ----------*/
router.get('/question/:question', wolframCtrl.ask);
router.get('/log', wolframCtrl.getLog);


/*---------- Protected Routes ----------*/




module.exports = router;