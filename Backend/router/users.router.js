import express from 'express'
import { loginUser, registerUser, userLogout } from '../controllers/auth.controller.js'
const router = express.Router()


router.post('/signup',registerUser)
router.post('/login',loginUser)
router.get('/logout',userLogout)



export default router