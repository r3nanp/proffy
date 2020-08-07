import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

//Escutando a porta 3333 e exibindo uma mensagem
app.listen(3333);