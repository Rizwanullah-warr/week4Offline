const express = require("express");
const app = express();

app.use(express.json());

var users = [{
    name: 'john',
    kidney: [{
        healthy: false
    }, {
        healthy: true
    }]
}];

app.get("/", function(req, res) {
    const johnKidneys = users[0].kidney;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }

    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    
    res.json({
        johnKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys,
    })
})

app.post("/", function(req, res) {
    const ishealthy = req.body.ishealthy;  // Get value from request body
    
    // FIXED: Changed 'user' to 'users'
    users[0].kidney.push({
        healthy: ishealthy  // REMOVED the semicolon here
    })
    
    res.json({
        msg: "done"
    })
})

app.listen(3007, () => {
    console.log('Server running on http://localhost:3007');
});