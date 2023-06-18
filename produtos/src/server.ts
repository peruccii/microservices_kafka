import express from 'express'
import { router } from './infra/providers/kafka/routes';

const app = express();

app.use(express.json());

app.use(router)

const PORT = process.env.PORT ?? 3003;

app.listen(PORT, () => console.log(`Server PRODUCT runnign on PORT ${PORT} `));
