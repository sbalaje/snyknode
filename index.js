const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    console.log(req.query.name)
   
})


app.post("/",(req,res)=>{
    res.send("<html><body> <script type='text/javascript'>alert('insecurre code')</script></body></html>") 

})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})