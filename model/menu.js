const moongose=require('mongoose');
const menuItemSchema=new moongose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type: Number,
    required: true
  },
  taste:{
    type:String,
    enum:["sweat","spicy","sour"],
    required:true
  },
  isdrink:{
    type:Boolean,
    default:false
  },
  ingreadiants:{
    type:[String],
    default:[]
  }
});
const Menu=moongose.model("menu",menuItemSchema);
module.exports=Menu;