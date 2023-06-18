import { Request, Response } from 'express';
import { CreateClientUseCase } from './create-client.usecase';

export class CreateCustomerController {
  async handle(request: Request, response: Response) {
    const useCase = new CreateClientUseCase()
    try {
      const rs = await useCase.execute(request.body)
     
     
      return response.status(201).json(rs)
    } catch (err) {
        console.log(err);
              
      return response.status(400).json(err)
    }
    
  }
}