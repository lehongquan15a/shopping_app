const express = require('express');
const router = express.Router();

const controller = require('../controllers/category.controller');

router.get('/',controller.index);
router.post('/',controller.create);
router.put('/:id',controller.putUpdate);
router.delete('/:id',controller.delete)


module.exports = router;