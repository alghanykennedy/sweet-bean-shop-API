import express from 'express'
import { createProduct, products, detailProduct, updateProduct, deleteProduct, fileUpload } from '../controllers/productController.js'

const router = express.Router()

// CRUD Product

// Create Data Product
// POST /api/v1/product
// middleware owner
router.post('/product', createProduct)

// Read Data Product
// GET /api/v1/products
router.get('/products', products)

// Detail Data Product
// GET /api/v1/product/:id
router.get('product/:id', detailProduct)

// Update Data Product
// PUT /api/v1/product/:id
// middleware owner
router.put('product/:id', updateProduct)

// Delete Product
// DELETE /api/v1/product/:id
// middleware owner
router.delete('product/:id', deleteProduct)

// File Upload Data Product
// POST /api/v1/product/file-upload
// middleware owner
router.post('product/file-upload', fileUpload)

export default router