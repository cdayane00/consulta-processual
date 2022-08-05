import {Router} from 'express';
import dataController from '../controllers/dataController.js';

const dataRoute = Router();

dataRoute.get('/:cnj', dataController.getCnj);

export default dataRoute;
