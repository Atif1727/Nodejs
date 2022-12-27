const express = require('express');
const dbConnection=require('./mongodb');
const mongodb=require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req,res)=>{
    let data=await dbConnection();
    data=await data.find().toArray();
    res.send(data);
});

app.post('/',async (req,res)=>{
    let data=await dbConnection();
    let result=await data.insertOne(req.body);
    res.send(result);
});

app.put('/',async (req,res)=>{
    let data=await dbConnection();
    let result=await data.updateOne(
        {name:req.body.name},
        {$set:req.body}
    );
    res.send(result);
});

app.delete('/:id', async (req,res)=>{
    console.log(req.params.id);
    const data = await dbConnection();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id.trim())});
    res.send(result)
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});