import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';

dotenv.config();

// Connect to Database
connectDB();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('LMS API is running...');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
