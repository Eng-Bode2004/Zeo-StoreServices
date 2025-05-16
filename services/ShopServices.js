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

}

module.exports = new ShopServices;