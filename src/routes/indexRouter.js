import { Router } from 'express';
import { showAllUsers, deleteMessage } from '../controllers/indexController.js'
const indexrouter = Router();

indexrouter.get('/', showAllUsers);
indexrouter.get('/delete/:id', deleteMessage)


export default indexrouter;