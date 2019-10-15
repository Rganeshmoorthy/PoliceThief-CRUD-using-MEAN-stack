var express  = require('express');

const router = express.Router();

const ctrlThief = require('../Controllers/thief.controller');

router.post('/register',ctrlThief.register);
router.get('/getThieves',ctrlThief.getThieves);
router.delete('/deleteThief/id/:id',ctrlThief.deleteThiefByID);
router.put('/updateThief/id/:id',ctrlThief.updateThiefByID);


module.exports = router;