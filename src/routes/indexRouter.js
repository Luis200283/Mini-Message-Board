import { Router } from 'express';
import indexController from '../controllers/indexController.js'
const indexrouter = Router();

indexrouter.get('/', indexController);

export default indexrouter;