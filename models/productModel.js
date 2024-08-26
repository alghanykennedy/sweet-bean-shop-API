import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name of product cant be empty"],
        unique: [true, "Name of product is already used, please input another product name"]
    },
    price: {
        type: Number,
        required: [true, "Price cant be empty"]
    },
    description:
    {
        type: String,
        required: [true, "Description cant be empty"]
    },
    image: {
        type: String,
        default: null
    },
    category: {
        type: String,
        required: [true, "Category of Product can't be empty"],
        enum: ["Choco", "Chips", "Candy"]
    },
    stock: {
        type: Number,
        default: 0
    },
});

const Product = mongoose.model("Product", productSchema)

export default Product