import { prismaClient } from '../../infra/database/prismaClient'
import { KafkaSendMessage } from '../../infra/providers/kafka/producer'

type CreateProductRequest = {
  name: string
  code: string
  quantity: number
  price: number
}

export class CreateProductUseCase {
  async execute(data: CreateProductRequest) {

    const product = await prismaClient.product.findUnique({
      where: {
        code: data.code
      }
    })

    if(product) throw new Error("product already exists")
    
    const productCreated = await prismaClient.product.create({
      data: {
        ...data
      }
    })

    const kafkaMessage = new KafkaSendMessage()
    await kafkaMessage.execute("PRODUCT_CREATED", productCreated)

    return productCreated
  }
}