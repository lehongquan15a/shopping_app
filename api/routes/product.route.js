const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

const controller = require('../controllers/product.controller');

router.get('/',controller.index);
router.post('/',controller.create);
// router.delete('/:id',controller.delete)


module.exports = router;