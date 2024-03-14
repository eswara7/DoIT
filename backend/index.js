const express = require('express')
const app = express()
const {createTodo,updateTodo} = require("./types")
const { todo } = require('./db')


app.use(express.json())
 
app.post("/todo",async (req,res)=>{
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad)
    if(!parsedPayLoad.success){
        res.status(411).json({
            messege:"you has sent wrong inputs"
        })
        return;
    }
    //putting it in mongodb
    await todo.create({
        title:parsedPayLoad.title,
        description:parsedPayLoad.description,
        completed: false
    })

    res.json({messege:"todo added"})

})

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({}) //promise so if no awai then only  promise shown no acutal data
    console.log(todos)
})

app.put("completed",async (req,res)=>{
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad)
    if(!parsedPayLoad.success){
        res.status(411).json({
            messege:"wrong inputs"
        })
        return;
    }
    await todo.update({_id:req.body.id},{completed:true})
    res.json({messege:"task completed"})

})

app.listen(3000,()=>{console.log("server running")})