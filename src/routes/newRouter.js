import { Router } from "express";
import { newMessage, postNewMessage } from '../controllers/newController.js'
const newRouter = Router()

newRouter.get('/', newMessage);
newRouter.post('/', postNewMessage)

export default newRouter