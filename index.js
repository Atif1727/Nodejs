// const fs=require("fs");
// const path=require("path");

// // // directory path 
// // const dirpath=path.join(__dirname,'files');
// // //console.warn(dirpath);

// // //create the file in files directory
// // for(i=0;i<=4;i++){
// //     //fs.writeFileSync(dirpath+`/hello ${i}.txt`,'A Simple text file');
// // }


// // // reading the file name from the folder
// // fs.readdir(dirpath,(err,files)=>{
// //     files.forEach((item)=>{
// //         //console.log(item);
// //     });
// // });


// // //CRUD OPERATION
// // const dirpath1=path.join(__dirname,'crud');
// // const filepath=`${dirpath1}/apple.txt`;//filepath name
// // //fs.writeFileSync(filepath,'The is a simple txt file');
// // fs.readFile(filepath,'utf8',(err,file)=>{
// //     //console.log(file);
// // })// we are here reading the txt file

// // //UPDATE the txt file
// // fs.appendFile(filepath,'Filename is apple.txt',(err)=>{
// //     //if(!err) console.log("File is Updated")
// // });

// // //RENAME the txt file 
// // fs.rename(filepath,`${dirpath1}/orange.txt`,(err)=>{
// //     //if(!err) console.log("File is Renamed");
// //     //console.log(dirpath1);
// // });

// //DELETE txt file
// //fs.unlinkSync(`${dirpath1}/orange.txt`);



// //Handle Asynchronous Data
// let a=20;
// let b=0;
// //Promise is used for to resolve the asynchronous data
// let waitingData=new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         resolve(30);
//     },2000);
// });

// waitingData.then((data)=>{
//     b=data;
//     //console.log(a+b);
// });

// //console.log("hello world");

// const express=require('express');//loading the express module
// const path=require('path');
// const reqFilter=require('./middleware');
// const route=express.Router();
// const app = express();
// const publicPath=path.join(__dirname,'public');
// //app.use(express.static(publicPath));

// app.set('view engine','ejs');

// route.use(reqFilter);
// app.get('',(_,res)=>{
//     res.sendFile(`${publicPath}/index.html`);
// });

// route.get('/about',(_,res)=>{
//     res.sendFile(`${publicPath}/about.html`);
// });

// route.get('/contact',(_,res)=>{
//     res.send("This is contact Page");
// });

// app.get('/profile',(_,res)=>{
//     let user={
//         name:'Atif',
//         email:'atif@test.com',
//         city:'San Francisco',
//         skill:['Node js','JavaScript','Java','Python']
//     }
//     res.render('profile',{user});
// });

// app.get('/login',(req,res)=>{
//     res.render('login');
// });

// //if the user ramdomly choose the url like contact or abc which is not present 
// app.get('*',(_,res)=>{
//     res.send("Url not found 404");
// });

// app.use('/',route);

// app.listen(5000);