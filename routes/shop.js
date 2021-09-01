const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();
const products = require('../controllers/products');
router.get('/', products.shop);

module.exports = router;
