import { Router } from "express";
import { newMessage, postMessage } from '../controllers/newController.js'
const newRouter = Router()

newRouter.get('/', newMessage);
newRouter.post('/', postMessage)

export default newRouter