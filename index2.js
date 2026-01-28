const express=require("express");
const app=express();


var users=[{
    name:'john',
    kidney:[{
        healthy:false
    }, {
        healthy:true

    }]
}];

// app.get('/',function(req, res){
//     const johnKidneys=users[0].kidney;
//     console.log(johnKidneys);
// })
// //console.log(users[0]);

app.use(express.json());


app.get("/", function(req,res){
    const johnKidneys=users[0].kidney;
    const numberOfKidneys= johnKidneys.length;
    let numberOfHealthyKidneys=0;
    for (let i=0;i<johnKidneys.length;i++)
    {
        if (johnKidneys[i].healthy){
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;

        }
    }

    const numberOfUnHealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    
    res.json({
        johnKidneys,
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys,

    })
})


app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidney.push({
        healthy:ishealthy
    })
    res.json({
        msg:"done"
    })
})


app.put("/",function(req,res)
{
    for (let i=0;i<users[0].kidney.length;i++){
        users[0].kidney[i].healthy=true;
    }
    res.json({});
})




//Delete all uhhealthy kidneys
app.delete("/",function(req,res){
    // you should return 411
    //only if atleast one unhealthy kidney is there do this else return 411
    
    if(isThereAtleastOneunhealthyKidney())
    {
         
    const newKidneys=[];
    for (let i=0;i<users[0].kidney.length;i++)
        {
        if (users[0].kidney[i].healthy){
          atleastOneUnhealthyKidney=true;
        }

      
         }
    

    users[0].kidney=newKidneys;
    res.json({
        msg:"done"
    })
    }
    else {
        res.status(411).json({
            msg:"you do not have bad kidneys"
        });
    }
    
   // let atleastOneUnhealthyKidney=false;

  
})

function isThereAtleastOneunhealthyKidney(){
        let atleastOneUnhealthyKidney = false;  // ✅ Added this line
   for (let i=0;i<users[0].kidney.length;i++){
        if (!users[0].kidney[i].healthy){
          atleastOneUnhealthyKidney=true;
        }

      
     }
       return atleastOneUnhealthyKidney
    }

app.listen(3005,()=>{
    console.log("server  is running")
});
