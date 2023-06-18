import { Request, Response } from 'express';
import { UpdateOrderUseCase } from './update-order.usecase';

export class UpdateOrderController {
  async handle(request: Request, response: Response) {
    const useCase = new UpdateOrderUseCase()
    try {
      const rs = await useCase.execute(request.body, request)
      return response.status(201).json(rs)
    } catch (err) {
      console.log(err);
      return response.status(400).json(err)
    }
  }
}