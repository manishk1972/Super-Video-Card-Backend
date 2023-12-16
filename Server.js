import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import {router} from './routes/SuperCardRoute.js';
import { connection } from './database/db.js';
import bodyParser from 'body-parser';


const app = express()
const PORT = process.env.port || 5001

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, async () => {
  try {
    await connection;
  } catch (error) {
    console.log(error);
  }
  console.log(`Listening on port: ${PORT}`);
});