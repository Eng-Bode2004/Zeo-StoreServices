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

    async updateShopAddress(req, res) {
        try {
            const { shopId } = req.params;
            const { addressId } = req.body;

            if (!addressId) {
                return res.status(400).json({
                    status: 'failure',
                    message: 'Address ID is required in body.'
                });
            }

            const updatedShop = await ShopService.updateAddress(shopId, addressId);

            res.status(200).json({
                status: 'success',
                message: 'Shop address updated successfully.',
                shop: updatedShop
            });
        } catch (error) {
            res.status(400).json({
                status: 'failure',
                message: 'Failed to update shop address.',
                error: error.message
            });
        }
    }

    async getUserShops(req, res) {
        try {
            const { userId } = req.params;

            const shops = await ShopService.getShopsRelatedToUser(userId);

            res.status(200).json({
                status: 'success',
                message: 'User shops retrieved successfully.',
                shops: shops
            });
        } catch (error) {
            res.status(400).json({
                status: 'failure',
                message: 'Failed to retrieve shops.',
                error: error.message
            });
        }
    }

}

module.exports = new ShopController;