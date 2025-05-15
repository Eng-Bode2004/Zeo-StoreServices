const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({

    StoreOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Users',
    },

    name:{
        type: String,
        required: true,
        unique: true,
    },

    approved:{
        type:Boolean,
        default: false,
    },


    Tax_number:{
        type:Number,
    },

    cover_image:{
        type: String,
    },

    Logo:{
        type: String,
    },

    PII_Image:{
        type: String,
    },

    PII_Number:{
        type:Number,
    },

    StoreType:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'StoreType',
    },

    StoreCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'StoreCategory',
    },

    ShopItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'ShopItem',
    }],

    Address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },

})

module.exports = mongoose.model('Store', StoreSchema);