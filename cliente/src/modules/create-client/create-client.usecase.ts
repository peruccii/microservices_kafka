import { prismaClient } from '../../infra/database/prismaClient'
import { kafka } from '../../infra/provider/kafka'
import { KafkaSendMessage } from '../../infra/provider/kafka/producer'

//Requisit interface
type CreateClientRequest = {
  nome: string
  password: string
  email: string
  phone: string
}

export class CreateClientUseCase {
  async execute(data: CreateClientRequest) {

    //verify client exists
    const customer = await prismaClient.client.findFirst({
      where: {
        email: data.email
      }
    })

    if (customer) throw new Error("Custumer already exists")

    //body
    const customerCreated = await prismaClient.client.create({
      data: {
        nome: data.nome,
        password: data.password,
        email: data.email,
        phone: data.phone,
      },
    })

    //execute(topic, payload, in this case, obejct contain id and email)
    const kafkaProducer = new KafkaSendMessage()
    await kafkaProducer.execute("CUSTOMER_CREATED", {
      id: customerCreated.id,
      email: customerCreated.email,

    })

    return customerCreated
  }
}