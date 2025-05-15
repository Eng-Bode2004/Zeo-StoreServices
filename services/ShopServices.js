const ShopModel = require('../models/Shop');
const ShopTypeModel = require('../models/ShopType');

class ShopServices{
    async createShop(shopData){
        try {
            const {ShopOwner , name, description , cover_image , Logo , ShopType } = shopData;

            if (!ShopOwner||!name||!description||!cover_image||!Logo||!ShopType){
                return Promise.reject(new Error("Please enter all fields that required!"));
            }

            // Check if Shop is Already exists
            const existingShop = await ShopModel.findOne({name});
            if(existingShop){
                return Promise.reject(new Error("Shop already exist"));
            }

            const newShop = await ShopModel.create({
                ShopOwner,
                name,
                description,
                cover_image,
                Logo,
                ShopType,
            })

            await ShopTypeModel.findByIdAndUpdate(ShopType,{$push:{shops:newShop._id}},{new: true});
            return newShop;


        }

        catch (error) {
            throw error;
        }

    }

    async ChoosingShopType(shopId , ShopType){
        try {
            if (!shopId||!shopId){
                return Promise.reject(new Error("Please enter all fields that required!"));
            }

            return  await ShopModel.findByIdAndUpdate(shopId,{$set: {ShopType:ShopType}},{new: true});
        }

        catch (error) {
            return Promise.reject(error);
        }
    }

    async getShopItems(shop_id){
        try {

            if (!shop_id) {
                return Promise.reject(new Error("Shop ID is required"));
            }


            const shop = await ShopModel.findById(shop_id).populate('ShopItems').select('ShopItems');

            if (!shop) {
                return Promise.reject(new Error("Shop not found"));
            }

            return shop.ShopItems;

        }
        catch (error) {
            return Promise.reject(new Error("Error in getShopItems!"));
        }
    }


    async approvingShop(shop_id){}

}

module.exports = new ShopServices;