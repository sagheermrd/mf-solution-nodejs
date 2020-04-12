import express from 'express'
import {RepeatedWords} from '../src/utility';
const server = express();

server.use(express.json());

server.get('/',(req,res) => res.send('Duplicate words finder, please use GET: /api/dupicates?input=abc'))
server.get('/api/duplicates',(req,res)=>{
    const {input} = req.query;
    var result= RepeatedWords(input);
    res.json(result);
})
export default server;

