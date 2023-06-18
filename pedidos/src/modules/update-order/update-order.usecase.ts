import { Request } from 'express'
import { prismaClient } from '../../infra/database/prismaClient'
import { KafkaSendMessage } from '../../infra/providers/kafka/producer'

type UptadeOrderRequest = {
  id: string,
  status: string,
}

export class UpdateOrderUseCase {
  async execute(data: UptadeOrderRequest, req: Request) {
    const paramId = req.params.id
    const paramStauts = req.params.status

    const orderUpdate = await prismaClient.order.update({
      where : {
        id: paramId
      },
      data: {
        status: paramStauts
      }
    })

    const kafkaSendMessage = new KafkaSendMessage()
    await kafkaSendMessage.execute("ORDER_STATUS", {
      customerId: orderUpdate.customerId,
      status: orderUpdate.status
    })
  }
}