import express from 'express'

const router = express.Router()

// Post /api/v1/auth/register
router.post('/register', (req, res) => {
    res.send("Register")
})

// Post /api/v1/auth/login
router.post('/login', (req, res) => {
    res.send("Login")
})

// Get /api/v1/auth/logout
router.get('/logout', (req, res) => {
    res.send("Logout")
})

// Get /api/v1/auth/user
router.get('/user', (req, res) => {
    res.send("Get Current User")
})

export default router