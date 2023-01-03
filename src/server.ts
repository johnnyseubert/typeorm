import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const server = express();
server.use(cors());
server.use(express.json());
server.use(routes);

const port = process.env.PORT || 4444;

server.listen(port, () => {
   console.log(`Servidor rodando ${port}`);
});
