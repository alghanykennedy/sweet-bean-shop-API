import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

export const createProduct = asyncHandler(async (req, res) => {
    try {
        console.log("Request Body:", req.body);
        const newProduct = await Product.create(req.body);

        return res.status(201).json({
            message: "Product created successfully",
            data: newProduct,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationMessages = Object.values(error.errors)
                .map((err) => ({
                    field: err.path,
                    message: err.message,
                }));

            return res.status(400).json({
                message: "Product validation failed. Please check the input fields.",
                errors: validationMessages,
            });
        }

        throw error;
    }
})

export const products = asyncHandler(async (req, res) => {
    try {
        const data = await Product.find();

        return res.status(200).json({
            message: "Success get All Product",
            data
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while fetching the products",
            error: error.message,
        })
    }
})

export const detailProduct = asyncHandler(async (req, res) => {
    try {
        const paramsId = req.params.id
        const productData = await Product.findById(paramsId)

        if (!productData) {
            res.status(404)
            throw new Error("Id not Found");
        }

        return res.status(200).json({
            message: "Success get Detail Product",
            data: productData
        })
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid product ID format",
            });
        }

        throw error;
    }
})

export const updateProduct = asyncHandler(async (req, res) => {
    try {
        const paramsId = req.params.id;
        const updateProduct = await Product.findByIdAndUpdate(
            paramsId,
            req.body,
            {
                runValidators: true,
                new: true,
            }
        );

        if (!updateProduct) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        return res.status(200).json({
            message: "Product updated successfully",
            data: updateProduct,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationMessages = Object.values(error.errors).map((err) => ({
                field: err.path,
                message: err.message,
            }));

            return res.status(400).json({
                message: "Product update failed. Please check the input fields.",
                errors: validationMessages,
            });
        } else if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid product ID format",
            });
        }

        throw error;
    }
})

export const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const paramsId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(paramsId);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        return res.status(200).json({
            message: "Product deleted successfully",
        });
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid product ID format",
            });
        }

        throw error;
    }
})

export const fileUpload = asyncHandler(async (req, res) => {
    try {
        res.status(200).json({
            message: "File upload successful",
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred during file upload",
            error: error.message,
        });
    }
})

