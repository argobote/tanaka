import mongoose from 'mongoose'


const room = new mongoose.Schema(
    {
    name :{
        type: String,
        requiered: true,    
        trim :true,
        lowercase:true
    },
    max:{
        type:Number,
        default: 1,
        validate: value => {
            if (value < 0) {

                throw new error("la chambre dois acceuilr au moin une personne")
            }
        }
    },  

})

const Room = mongoose.model('room',room)
export default Room 



