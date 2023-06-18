import express from 'express'
import './infra/providers/kafka/consumers'
import { router } from './infra/routes';

const app = express();

app.use(express.json());

app.use(router)

const PORT = process.env.PORT ?? 3002;

app.listen(PORT, () => console.log(`Server ORDER runnign on PORT ${PORT} `));
