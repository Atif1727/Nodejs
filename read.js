const dbConnection=require('./mongodb');

//Reading the database
// dbConnection().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

//second method to handle promise 
const main= async ()=>{
    let data=await dbConnection();
    result =await data.find().toArray();
    console.warn(result);
};

main();