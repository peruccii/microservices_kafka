import { Kafka } from 'kafkajs';
 
const kafka = new Kafka({
  brokers: ['one-gnat-10981-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'b25lLWduYXQtMTA5ODEkeGM82KU3gBHx5XC34TplDj2ZTeFJsQDzenQpFFFIIxI',
    password: '003d1a966f7d4bcaa87d547dce96e044',
  },
  ssl: true,
})

export { kafka }