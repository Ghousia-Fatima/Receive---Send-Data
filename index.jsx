const express = require('express')
const app = express();
require ('dotenv').config()

// const bodyParser = require('body-parser');
// console.log(process.env.PASSWORD)

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Routes
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})

// app.post("/", (req, res)=>{
//     console.log(req.body)
//     res.send(`<h1>Hi Mr. ${req.body.name} </h1>
//     <h2> Your email is ${req.body.email}</h2>
//     <h2>Your Passowrd is ${req.body.password}</h2>
    
//     `)
// })

app.post('/api/register', (req,res)=>{
    console.log(req.body)
    res.json({
        success:'true'
    })
})


const PORT = process.env.PORT || 5000



// app.use(bodyparser.urlencoded({extended:false}))
// app.use(bodyParser.json())

app.listen(PORT, ()=>{
    console.log("server running at port", PORT)
})


