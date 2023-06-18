import {  Router } from 'express';
import { CreateOrderController } from '../modules/create-order/create-order.controller';
import { UpdateOrderController } from '../modules/update-order/update-order.controller';
const createOrderController = new CreateOrderController()
const updateOrderController = new UpdateOrderController()

const router = Router();

router.post('/orders', createOrderController.handle)
router.patch('/orders/:id/:status', updateOrderController.handle)

export { router }