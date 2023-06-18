import { Request, Response } from 'express';
import { CreateProductUseCase } from './create-product.usecase';

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const useCase = new CreateProductUseCase()
    try {
      const rs = await useCase.execute(request.body)
      return response.status(201).json(rs)
    } catch (err) {
      console.log(err);
      return response.status(400).json(err)
    }

  }
}