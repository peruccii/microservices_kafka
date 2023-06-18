import { prismaClient } from '../../infra/database/prismaClient'
import { Kafka } from 'kafkajs'


//Requisit interface
type CreateOrderRequest = {

  customerId: string
  items: [{productId: string; quantity: number}]
}

export class CreateOrderUseCase {
  async execute(data: CreateOrderRequest) {
   const order = await prismaClient.order.create({
      data: {
        customerId: data.customerId,
        status: "AGUARDANDO_PAGAMENTO",
        OrderItems: {
          create: data.items.map(item => ({
            quantity: item.quantity,
            productId: item.productId
          }))
        }
      },
    })

    return order
  }
}