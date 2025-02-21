const express = require('express');
const router = express.Router();
const produitPop = require('../services/popService');

router.get("/", (req,res) => {
    produitPop.FetchPop().then((result) =>{
        res.json(result);
    }).catch((error) =>{
        console.log(error);
        res.json({message : "une erreur est survenue"})
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    produitPop.FetchPopById(id).then((result) =>{
        res.json(result);
    }).catch((error) =>{
        console.log(error);
        res.json({message : "une erreur est survenue"})
    })
})


module.exports = router;