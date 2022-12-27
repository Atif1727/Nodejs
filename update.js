const dbConnection=require('./mongodb');

const UpdateData=async ()=>{
    let data=await dbConnection();
    let result=await data.updateMany({
        name:'Realme X2pro'
    },{
        $set: {name:'Realme X2'}
    })
    console.warn(result);  
};

UpdateData();