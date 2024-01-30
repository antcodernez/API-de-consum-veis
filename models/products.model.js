import { Schema, model } from "mongoose";

const productSchema = new Schema({
    barcode: {
        type: String,   
        unique: true,
        require: true
    },
    description: String,
    brand: String,
    price: Number,
    stock: Number,
    expireDate: String,
    status: Boolean
}, {
    versionKey: false,
    timestamps: true
});


export default model("product", productSchema);
