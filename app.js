import express from 'express';
import cors from 'cors';
import clientRouter from './routes/client/index.router.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

const app = express();

// const corsOptions = {
//     origin: ["http://localhost:3000"],
//     headers: ["Content-Type", "Accept"],
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//     credentials: true
// };

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};

dotenv.config();

// Middleware setup
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 
app.options('*', cors(corsOptions));

// Routes
app.use("/api", clientRouter);

app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;
