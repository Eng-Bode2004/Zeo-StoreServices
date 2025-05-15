const express = require('express');
const router = express.Router();

const ShopController = require("../controllers/ShopController");

router.post('/online/:ShopOwner',ShopController.createStore);

module.exports = router;