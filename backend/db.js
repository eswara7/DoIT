const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://eswar:eswar10cgpa@cluster1.qldz5vt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1").then(()=>{console.log("database connection successful")})
.catch(err=>{console.log(`some error occured ${err}`)})

const todoSchema = mongoose.Schema({
  title:String,
  description:String,
  completed: Boolean
})
export const todo = mongoose.model("todo",todoSchema)