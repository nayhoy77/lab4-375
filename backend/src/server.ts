// src/server.ts

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

import taskRoutes from './routes/task.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/tasks', taskRoutes);

// test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});