const express=require('express');
const router=express.Router();
const Person=require('../model/person.js');
router.post("/person",async(req,res)=>{
  try{
    const data=req.body;
    const newperson=new Person(data);
    const response=await newperson.save();
    console.log("data is saved");
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:"internal server error"})

  }
})
router.get('/person',async(req,res)=>{
  try{
    const data=await Person.find();
    console.log("data is fetched succesfully");
    res.status(200).json(data);
  }
  catch(err){
    console.log("data is not fetched");
    res.status(500).json(err,"internal server error");
  }
})
router.get('/person/:worktype',async(req,res)=>{
  try{
    const worktype=req.params.worktype;
    if(worktype=="chef"|| worktype=="waiter"||worktype=="manager"){
   const data=await Person.find({work:worktype});
    console.log("data is fetched");
    res.status(200).json(data);
  }
   else{
      console.log("not found"+worktype);
    }
    }
   
  catch(err){
    console.log(err,"internal sever error");
    res.status(400).json(err);
  }
});
router.put('/:id',async (req,res)=>{
  try{
    const id=req.params.id;  // extract id from url
    const data=req.body;
    const response=await Person.findByIdAndUpdate(id,data,{
      new:true,           // return the updated document
      runValidators:true  //Run mongoose validation
    });
    console.log("data updated succesfully");
    res.status(200).json(response);
  }
  catch(err){
    console.log("internal server error");
    res.status(400).json({message:"internal server error"});
  }

})
router.delete('/:id',async (req,res)=>{
  try{
  const id=req.params.id;
  const response=await Person.findByIdAndDelete(id);
  if(!response){
    res.status(404).json("person is not matched");
  }
  else{
    res.status(200).json("person deleted succesfully");
  }
  }
  catch(err){
    console.log("internal server error");
    res.status(400).json({message:"internal server error"});

  }
})
module.exports=router;
