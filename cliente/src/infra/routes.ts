import {  Router } from 'express';
import { CreateCustomerController } from '../modules/create-client/crate-client.controller';

const createCustomerController = new CreateCustomerController()

const router = Router();

router.post('/customers', createCustomerController.handle)

export { router }