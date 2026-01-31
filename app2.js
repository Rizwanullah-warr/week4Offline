const express=require("express")
const app=express();

app.use(express.json());

const users=[{
    name:"john",
    kidney:[

        { healthy:true},
        { healthy:true},
        {healthy:false},
    ]
}]

// app.get("/",(req,res)=>{
//     res.send("hell,server is running");
// });



//2nd part
app.get("/",(req,res)=>{
    const johnKidneys=users[0].kidney;
    const totalKidneys=johnKidneys.length;
    let numberOfHealthyKidneys=0;
    for (let i=0;i<users[0].kidney.length;i++)
    {
        if(users[0].kidney[i].healthy)
        {
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;

        }

    


    }

    numberOfUnHealthyKidneys= totalKidneys-numberOfHealthyKidneys;


    
       res.json({
        totalKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys,

       })



})

app.listen(3000,()=>{

    console.log("server is running");
});