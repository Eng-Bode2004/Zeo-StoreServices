const ShopService = require('../services/ShopServices');

class ShopController{
    async createOnlineStore(req, res){
        try {

            const { StoreOwner }= req.params;
            const {name, Logo,cover_image, PII_Image, PII_Number, StoreType, StoreCategory } = req.body;
            if(!StoreOwner){
                res.status(400).send({
                    error: 'Enter ShopOwner id ',
                });
            }
            if (!name || !Logo ||!cover_image || !PII_Image || !PII_Number || !StoreType||!StoreCategory){
                res.status(400).send({
                    error: 'Enter all Fields Required in The Request',
                })
            }
            const shopData = {StoreOwner, name, Logo,cover_image, PII_Image, PII_Number, StoreType, StoreCategory }
            const newShop = await ShopService.createOnlineShop(shopData);
            res.status(200).send({
                status: 'success',
                message: 'Shop created successfully',
                store: newShop,
            });


        }
        catch (error){
            res.status(400).send({
                error: error.message,
                message: "Failed to create Shop",
            })
        }

    }


}

module.exports = new ShopController;