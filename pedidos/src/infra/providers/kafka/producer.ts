import { kafka } from '.';

//kafka send messages contain topic ( ./use case execute(CUSTOMER_CREATED, payload(what will be saved and sent)))
export class KafkaSendMessage {
  async execute(topic: string, payload: any): Promise<void> {
    const producer = kafka.producer({
      allowAutoTopicCreation: true
    })

    await producer.connect()
    console.log(`MESSAGE SENDO TO TOPIC ${topic}`);
    console.log(payload);
    
    //send topic CUSTOMER_CREATED and messages with payload information in JSON
    await producer.send({
      topic,
      messages: [
        {
          value: JSON.stringify(payload)
        }
      ]
    })

    await producer.disconnect()
  }
}