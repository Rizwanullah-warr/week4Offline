const express=require("express")
const app=express();

app.use(express.json());

const users=[{
    name:"john",
    kidney:[{
        healthy:true,
        unhealthy:false,
    }]
}]

app.get("/",(req,res)=>{
    res.send("hell,server is running");
});

app.listen(3000,()=>{

    console.log("server is running");
});