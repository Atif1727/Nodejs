const e = require('express');
const dbConnection=require('./mongodb');

const insert=async ()=>{
    const db=await dbConnection();
    const result=await db.insertMany([
        {name:'Realme X2pro',brand:'Realme',price:'$400'},
        {name:'Realme Z2',brand:'Realme',price:'$200'}
    ])
    if(result.acknowledged){
        console.log('Data is Inserted successfully');
    }
};

insert();