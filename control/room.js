import RoomModel from '../model/model.js'
import {router} from '../root/rootes.js'
export const fonc =(req,res)=>{
    res.send({
        name: 'abdel'
        
    })
    }
    export const add = async (req,res)=>{
        console.log("je suis nulls")
        const room = new RoomModel(req.body)
        
      

        try {
            console.log("sa marche")
            const result = await room.save()
            console.log(result)
            res.json(result)
            
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
            
        }

    }

    export const read = async (req,res) =>{
        const room = await RoomModel.find({name: 'axel'})
        res.send(room)
    }

    export const ide = async (req,res)=>{

        console.log(req.params.id)
        const room = await RoomModel.find({_id : req.params.id})
        res.send(room)
    }
    export const upd = async (req,res)=>{

        console.log(req.params.id)
        const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body)
        await room.save()
        res.send(room)
    }
export const del = async (req,res)=>{
    console.log(req.params.id)
    const room = await RoomModel.findByIdAndDelete(req.params.id)
    if(!room){
        res.status(404).send("aucune chambre ne corespond poto tu as pas reserver")
            res.status(201).send("chambre bien sup")
        
        }
    }

