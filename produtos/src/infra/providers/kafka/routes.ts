import {  Router } from 'express';
import { CreateProductController } from '../../../modules/create-product/create-product.controller';

const createProductController = new CreateProductController()

const router = Router();

router.post('/product', createProductController.handle)

export { router }