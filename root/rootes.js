import express from 'express'
import {fonc, add, read, ide, upd, del }   from '../control/room.js'

export const router = express.Router()
router.get('/',(req,res)=>{
    res.send("hello les hard codeurs")
})


router.get('/test', fonc)
router.post('/room', add)

router.post('/test',(req,res)=>{
    console.log(req)
    res.send(req.body)//demander des explication a axel sur json et req
    
})

router.get('/room',read)
router.patch('/list/:id', upd)
router.get('/list/:id', ide)
router.delete('/list/:id', del)