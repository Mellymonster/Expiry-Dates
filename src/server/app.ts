import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { useAppRouting } from './app.routing';
import { initDb } from './database/database';

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });

const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;

initDb();
useAppRouting(app);

app.listen(port, () => {
    console.log(`[INFO]: Express server is running at ${process.env.BASE_URL}`);
});
