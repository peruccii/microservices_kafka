import { kafka } from '.';

//kafka consumer receive topic CUSTOMER_CREATED
export const kafkaConsumer = async (topic: string) => {
  const consumer = kafka.consumer({groupId: "ORDER_APP"});
  await consumer.connect();


  await consumer.subscribe({topic, fromBeginning: true});

  return consumer
}