const express = require('express');
const router = express.Router();

const ShopController = require("../controllers/ShopController");

router.post('/online/:StoreOwner',ShopController.createStore);

module.exports = router;