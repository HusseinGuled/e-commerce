
import products from "../models/product.js";


export const saveProduct=async(req, res) =>{
  const data=await products(req.body).save()
  res.send("successfully saved"+ data)
}


export const getAllProducts=async(req,res)=>{
  const all=await products.find()
  res.send(all)
}


