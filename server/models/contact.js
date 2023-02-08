import mongoose from 'mongoose';
const contactSchema = mongoose.Schema({

email:{type:String },
subject:{type:String },
message:{type:String }

},{ timestamps:true});
const contactInfo = mongoose.model('Contact-Info' ,contactSchema )
export default contactInfo;