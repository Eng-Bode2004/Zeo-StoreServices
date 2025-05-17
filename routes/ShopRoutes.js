const express = require('express');
const router = express.Router();

const ShopController = require("../controllers/ShopController");

router.post('/online/:StoreOwner',ShopController.createOnlineStore);

router.put('/:shopId/address', ShopController.updateShopAddress);

module.exports = router;