import contactInfo from "../models/contact.js";


export const contactData = async(req,res)=>{
    try{
        const data = await new contactInfo(req.body).save();
        res.send('saved data')

    }catch(e){
        console.log(e.message)
    }
}