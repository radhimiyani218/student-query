const express = require("express")
const connected= require("./db")
const student=require("./schema")
const app = express()
app.use(express.json())

app.get("/1", async (req, res) => {
    const data = await student.find({gender:"Female"}).count();
    res.send(data)
})
app.get("/2",async(req,res)=>{
    const data=await student.find({
        gender: "Male",
        maths: { $gt: 85 },
        science: { $gt: 85 },
        english: { $gt: 85 },
      })
      .count();
    res.send(data)
})
app.get("/3",async(req,res)=>{
    const data=await student.find({maths:{$gt:50,$lt:75},english:{$gt:50,$lt:75}}).count();
    res.send(data)
})
app.get("/4",async(req,res)=>{
    const data=await student.find({class:{$gte:"I",$lte:"IV"}  ,maths:{$gt:50},english:{$gt:50},science:{$gt:50}}).count();
    res.send(data)
})
app.get("/5",async(req,res)=>{
    const data=await student.find({
        gender: "Female",
        class: "X",
        section: "A",
        maths: { $lt: 25 },
        science: { $lt: 25 },
        english: { $lt: 25 },});
    res.send(data)
})
app.get("/6",async(req,res)=>{
    const data=await student.find({"class": "V"}).sort({"maths": -1}).limit(3)
    res.send(data)
})
app.get("/7",async(req,res)=>{
    const data=await student.find({"class": "I"}).sort({"science": 1}).limit(5)
    res.send(data)
})
app.get("/8",async(req,res)=>{
    const data=await student.find({
        section: "A",
        maths: { $lt: 50 },
        science: { $lt: 50 },
        english: { $lt: 50 },
      });
    res.send(data)
})

app.get("/9",async(req,res)=>{
    const data=await student.find({
        section: "C",
        maths: { $gt: 75 },
        science: { $gt: 75 },
        english: { $gt: 75 },
      });
    res.send(data)
})

app.get("/10",async(req,res)=>{
    const data=await student.find().sort({ maths: 1 }).skip(20).limit(10);
    res.send(data)
})
app.get("/11",async(req,res)=>{
    const data=await student.find().sort({"science":-1}).skip(80).limit(20)
    res.send(data)
})
app.get("/12",async(req,res)=>{
    const data=await student.find()({"gender": "Female"}).sort({"science":1,"maths":1}).skip(15).limit(5)
    res.send(data)
})
app.get("/13",async(req,res)=>{
    const data=await student.find()({"gender": "Male"}).sort({"science":1,"maths":1,"English":1}).skip(10).limit(15)
    res.send(data)
})

app.listen(2300,()=>{
    console.log("listening part 2300");
    connected()
})