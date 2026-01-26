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

app.listen(3005);
