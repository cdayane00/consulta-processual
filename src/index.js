import express, {json} from 'express';
import cors from 'cors';
import chalk from 'chalk';
import dotenv from 'dotenv';
// const express = require('express');
// const {json} = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const dataRouter = require('./routes/dataRoute.js')
import dataRoute from './routes/dataRoute.js'

const app = express();
app.use(cors());
app.use(json());
dotenv.config();



// const dados = require("./data.json");
// console.log(dados[0].movimentacoes.data);

app.use(dataRoute);




app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});



