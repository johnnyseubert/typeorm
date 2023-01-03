import 'dotenv/config';
import { DataSource } from 'typeorm';

export const database = new DataSource({
   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: process.env.DB,
   synchronize: false,
   logging: true,
   entities: [__dirname + '/entities/*.ts'],
   migrations: [__dirname + '/migrations/*.ts'],
});

database
   .initialize()
   .catch((error) =>
      console.log(`Erro ao se conectar ao banco de dados: ${error}`)
   );
