import { Router } from 'express'
import { logoutController, registerUserController} from '../controllers/userController.js'
import { verifyEmailController,resetpassword } from '../controllers/userController.js'
import { loginController,verifyForgotPasswordOtp } from '../controllers/userController.js'
import auth from '../middlewares/auth.js'
import upload from '../middlewares/multer.js'
import { uploadAvatar,updateUserDetails ,forgotPasswordController} from '../controllers/userController.js'
import {refreshToken,userDetails} from '../controllers/userController.js'

const userRouter = Router()

userRouter.post('/register', registerUserController)
userRouter.post('/verify-email',verifyEmailController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)
userRouter.put('/upload-avatar',auth,upload.single('avatar'),uploadAvatar)
userRouter.put('/update-user',auth,updateUserDetails)
userRouter.put('/forgot-password',forgotPasswordController)
userRouter.put('/verify-forgot-password-otp',verifyForgotPasswordOtp)
userRouter.put('/reset-password',resetpassword)
userRouter.post('/refresh-token',refreshToken)
userRouter.get('/user-details',auth,userDetails)

export default userRouter