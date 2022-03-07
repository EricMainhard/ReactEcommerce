import express from 'express';
import { env } from 'process';
import { data } from './data.js';
import cors from 'cors';

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get('/api/products', (req,res) => {
    res.send(data.products);
})
app.get('/', (req,res) => {
    res.send('Server is ready');
})
app.listen(port, ()=>{
    console.log(`Server running into ${port}`)
})