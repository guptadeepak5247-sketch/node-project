const express=require('express');
const router=express.Router();
const Menu=require('../model/menu.js');
router.get('/item',async(req,res)=>{
  try{
    const data=await Menu.find();
    console.log("data fetched succesfully");
    res.status(200).json(data);
  }
  catch(error){
    console.log(error,"internal server error");
     res.status(500).json(error,"internal server error");
  }
});
router.post('/item',async(req,res)=>{
  try{ const rawdata=req.body;
    const realdata=new Menu(rawdata);
  const response=await realdata.save();
  console.log("item is saved successfully");
  res.status(200).json(response);
  }
  catch(error){
    console.log(error,"internal server error");
    res.status(500).json(error,"internal server errror");
  }
})
router.get('/menu/:tastetype',async (req,res)=>{
  try{
    const tastetype=req.params.tastetype;
    const response=await Menu.find({taste:tastetype});
    res.status(200).json(response);

  }
  catch(err){
    console.log(err,"internal server error");
    res.status(400).json(message,"internal server error");

  }
});
router.put('/:id',async (req,res)=>{
  try{
    const id=req.params.id;
    const data=req.body;
    const updateditem=await Menu.findByIdAndUpdate(id,data,{
      new:true,
      runValidators:true
    })
    console.log("item updated successfully");
    res.status(200).json(updateditem);
  }
  catch(err){
    console.log("internal server error");
    res.status(400).json({message:"internal server errror"});
  }
});
router.delete('/:id',async (req,res)=>{
  try{
    const id=req.params.id;
    const response=await Menu.findByIdAndDelete(id);
    if(!response){
      console.log("menu item is not in database");
      res.status(404).json({message:"item not exist"});
    }
    else{
      console.log("item deleted succesfully");
      res.status(200).json("item deleted succesfully");
    }
  }
  catch(err){
    console.log("internal server error")
    res.status(400).json({err:"internal server error"});
  }
})
module.exports=router;
