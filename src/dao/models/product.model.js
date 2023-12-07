import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    category: String
})

const Product = mongoose.model("productTest",productSchema)

export default Product