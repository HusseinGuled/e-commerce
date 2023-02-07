import mongoose from  "mongoose"

const productSchema=mongoose.Schema({
    itemName: String,
    price: Number,
    desc: String,
    image:  String
}, {timestamps:true})

const products=mongoose.model('products', productSchema)

export default products