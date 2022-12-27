//middleware.
//1.Application level middleware
module.exports= reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide a age");
    }else{
        if(req.query.age>=18){
            next();
        }else{
            res.send("You cannot acess this Page");
        }
    }
    
};
//app.use(reqFilter); this use the application level middleware