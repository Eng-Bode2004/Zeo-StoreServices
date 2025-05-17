const ShopModel = require('../models/Shop');

class ShopServices{
    async createOnlineShop(shopData) {
        const { StoreOwner, name, Logo, cover_image ,PII_Image, PII_Number, StoreType, StoreCategory } = shopData;

        if (!StoreOwner || !name || !Logo ||!cover_image || !PII_Image || !PII_Number || !StoreType||!StoreCategory) {
            return Promise.reject(new Error("Please fill all required fields"));
        }

        const existingShop = await ShopModel.findOne({ name });
        if (existingShop) {
            return Promise.reject(new Error("Shop already exists"));
        }

        const newShop = await ShopModel.create({
            StoreOwner,
            name,
            approved: false,
            Logo,
            cover_image,
            PII_Image,
            PII_Number,
            StoreType,
            StoreCategory,
        });

        return newShop;
    }


    // async createPhysicalShop(shopData) {
    //     const { StoreOwner, name, Logo, cover_image ,PII_Image, PII_Number, StoreType, StoreCategory } = shopData;
    //
    //     if (!StoreOwner || !name || !Logo ||!cover_image || !PII_Image || !PII_Number || !StoreType||!StoreCategory) {
    //         return Promise.reject(new Error("Please fill all required fields"));
    //     }
    //
    //     const existingShop = await ShopModel.findOne({ name });
    //     if (existingShop) {
    //         return Promise.reject(new Error("Shop already exists"));
    //     }
    //
    //     const newShop = await ShopModel.create({
    //         StoreOwner,
    //         name,
    //         approved: false,
    //         Logo,
    //         cover_image,
    //         PII_Image,
    //         PII_Number,
    //         StoreType,
    //         StoreCategory,
    //     });
    //
    //     return newShop;
    // }

    async updateAddress(shopId, addressId) {
        if (!shopId || !addressId) {
            return Promise.reject(new Error("Both shopId and addressId are required"));
        }

        return ShopModel.findByIdAndUpdate(shopId, {$set: {Address: addressId}}, {new: true});
    }

    async getShopsRelatedToUser(userId) {
        if (!userId) {
            return Promise.reject(new Error("Enter UseId required"));
        }
        return ShopModel.find({StoreOwner:userId});
    }

}

module.exports = new ShopServices;