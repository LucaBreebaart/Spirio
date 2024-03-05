import express from 'express';
import dotenv from 'dotenv';

import { DataSource } from 'typeorm';
// import ormconfig from '../ormconfig';

const app = express();

dotenv.config()

const AppDataSource = new DataSource(
    {
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "1234",
        "database": "class_db",
        "entities": ["src/entity/**"],
        "synchronize": true
    }
)

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.get('/', (req, res) => {
    res.send('Hello, Devs!');
});


app.get('/users', (req, res) => {
    const users=  AppDataSource.getRepository('User')
    .createQueryBuilder('users')
   // .get()
});

app.listen(process.env.PORT, () => {
    console.log('Server is listening on port 3000');
});