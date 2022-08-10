import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dataRoute from './routes/dataRoute.js'

const app = express();
app.use(cors());
app.use(json());
dotenv.config();

app.use(dataRoute);




app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});



