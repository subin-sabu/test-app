// src/routes/userRoutes.js


import { Router } from 'express';
import { createUser, getNames } from '../controllers/userController.js'

const userRouter = Router()

userRouter.post('/new', createUser);
userRouter.get('/all', getNames)

export default userRouter;