// src/index.js

import express from 'express';
const app = express();
import {config} from 'dotenv';
config();
import cors from 'cors'
import connectDb from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';

const PORT = process.env.PORT;
connectDb();

app.use(cors({
  origin:'http://localhost:5173'
}));

app.use(express.json());
//app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.json({"message": "api is working"});
});

app.use('/user', userRouter);


app.listen(PORT, () => {
  console.info(`server is running at http://localhost:${PORT}`);
});
