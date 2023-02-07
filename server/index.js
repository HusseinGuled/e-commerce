import express from "express"
import mongoose from "mongoose"
import router from "./routes/routes.js"
import cors from 'cors'
import products from "./models/product.js"
import multer from "multer"
import fs from 'fs'

const app=express()

 app.use(cors())
 app.use(express.json())

 mongoose.set({strictQuery:true})
 const url='mongodb://localhost:27017/e_commerce'
 mongoose.connect(url, function(err){
     if(err) throw err;
     console.log('successfully connected to the mongodb')
 })

app.listen(3000, function(err){
    if(err) throw err;
    console.log('successfully listening on port 3000')
})

app.use('/api', router)

//  const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'images')
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname)
//     }
//   })
  
//  const upload = multer({storage: storage})
  

// app.post('/api/save-product', upload.single('product'), (req, res) => {
//     const saveProduct =new products({
//         image: {
//         data: fs.readFileSync("./images/"+ req.file.filename),
//         contentType: 'image/png'
//       },
//       itemName:req.body.itemName,
//       price:req.body.price,
//       desc:req.body.desc,
  
//     })
//     saveProduct.save()
//     res.send('waa direy')
    
//   })