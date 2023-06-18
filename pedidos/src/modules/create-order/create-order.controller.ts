import { Request, Response } from 'express';
import { CreateOrderUseCase } from './create-order.usecase';

export class CreateOrderController {
  async handle(request: Request, response: Response) {
    const useCase = new CreateOrderUseCase()
    try {
      const rs = await useCase.execute(request.body)
      return response.status(201).json(rs)
    } catch (err) {   
      console.log(err);    
      return response.status(400).json(err)
    }
    
  }
}