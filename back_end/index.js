const express = require("express")
const app = new express()

require("./connection")
var EmplyeeModel = require("./model/employee")
app.use(express.json())
app.get('/', (req, res) => {
    res.send("msg from the server")
})
app.get('/d', (req, res) => {
    res.send("welcome")
})
app.listen(3004, () => {
    console.log("port is running")
})
app.post("/add", async (req, res) => {
    try {
        await EmplyeeModel(req.body).save();
        res.send({message:"data added"})
    } catch (error) {
        console.log(error)
        
    }
    
})
app.get('/rs', async (req, res) => {
    try {
        var Show= await EmplyeeModel.find();
        res.send(Show)

    } catch (error) {
        console.log(error)
        
    }
})
app.delete("/remove/:id", async (req,res) => {
    try {
        await EmplyeeModel.findByIdAndDelete(req.params.id)
        res.send({ message: "data deleted" })
    } catch (error) {
        console.log("port is running")
        
    }
})
app.put("/up/:id", async (req, res) => {
    try {
        await EmplyeeModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "data updated" })
    } catch (error) {
        console.log("port is running")

    }
})
