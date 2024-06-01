import express from 'express';
import mongoose from 'mongoose';

import UserRoute from './Router/UserRouter.js'
import LinkRoute from './Router/LinkRouter.js'

import cors from 'cors'


const app = express();
const port = 3000;

// חיבור ל-MongoDB
mongoose.connect('mongodb://localhost:27017/tinyurldb', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware לעבודה עם JSON
app.use(express.json());

app.use(cors());
// הגדרת המסלולים
app.use('/users', UserRoute);
app.use('/links', LinkRoute);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});