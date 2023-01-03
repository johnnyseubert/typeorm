import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

const port = process.env.PORT || 4444;

server.listen(port, () => {
   console.log(`Servidor rodando ${port}`);
});
