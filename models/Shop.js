const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({

    ShopOwner:{
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
    }]


})

module.exports = mongoose.model('Store', StoreSchema);