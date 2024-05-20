const express = require('express');
const router = express.Router();
const Alien = require('../models/alienModels')


router.get('/', async(req,res)=>{
    try{
        const aliens = await Alien.find();
        res.json(aliens);
    }catch(err){
        res.send('Error'+err);
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    }catch(err){
        res.send('Error'+err);
    }
})

router.post('/', async(req,res)=>{
    try{
        const alien = new Alien({
            name: req.body.name,
            tech: req.body.tech
        })
        const a1 = await alien.save()
        res.json(a1);
    }catch(err){
        console.log(`err`+err);
    }
})

router.put('/:id', async (req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const a1 = await alien.save()
        res.json(a1);
    }catch(err){
        console.log(`err ${err}`);
    }
})

// router.delete('/:id', async (req,res)=>{
//     try{
//         const alien = await Alien.findById(req.params.id);
//         const a1 = await alien.deleteOne()
//         res.json(a1);
//     }catch(err){
//         console.log(`err ${err}`);
//     }
// })

module.exports = router;