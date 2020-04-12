import express from "express";
const server = express();

server.use(express.json());
server.get('/api/duplicates',(req,res)=>{
    res.json([]);
})
export default server;

