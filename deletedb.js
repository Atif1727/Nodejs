const dbConnection=require('./mongodb');

const deleteData=async ()=>{
    let data=await dbConnection();
    const result=await data.deleteMany({
        name:'Realme X2'
    });
    console.warn(result);
};

deleteData();