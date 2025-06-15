import express from 'express';
import connectDB from './config/db.js';
import routes from "./routes/routes.js"
import rateLimiter from "./middleware/rateLimiter.js";
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: 'http://localhost:5173',
}))
app.use(express.json());
app.use(rateLimiter)


app.use('/api/notes', routes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})