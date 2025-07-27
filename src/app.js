import express from 'express'
import { createDbConnection } from './config/database.js';

const app = express();

app.listen(3000,()=>{
    console.log("Server is up and running")
})

