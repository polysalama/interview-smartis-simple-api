'use strict'

const express = require('express');
const helicopter = require('../controllers/helicopterController')
const router = express.Router();

router.get('/', helicopter.getHelicopters)

router.post('/', helicopter.createHelicopter)

router.get('/:helicopterId', helicopter.getHelicopter);

router.put('/:helicopterId', helicopter.updateHelicopter);

router.delete('/:helicopterId', helicopter.removeHelicopter);

module.exports = router;
