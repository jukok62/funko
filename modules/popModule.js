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
    console.log("clg de l'id : " + id);
    produitPop.FetchPopById(id).then((result) =>{
        res.json(result);
    }).catch((error) =>{
        console.log(error);
        res.json({message : "une erreur est survenue"})
    })
})

router.post("/", (req, res) => {
    const pop = req.body;
    console.log(pop);
    produitPop.AddPop(pop).then((result) => {
        res.json({result , message : "tout est ok"});
    }).catch((error) => {
        console.log(error);
        res.json({message : "une erreur est survenue"})
    })
})
router.delete("/:id", (req, res) => {
    const pop = req.params.id;
    console.log(pop);
    produitPop.DeletePop(pop).then((result) => {
        res.json({"result" : result[0], message : "suppression réussie"});
    }).catch((error) => {
        console.log(error);
        res.json({message : "une erreur est survenue"})
    })
})

router.patch("/", (req, res) => {
    const pop = req.body;
    console.log(pop);
    produitPop.updatePop(pop).then((result) =>{
        console.log(result);
        res.json({"result" : result[0], message : "maj ok"})
    }).catch((error) =>{
        console.log(error);
        res.json({message : " une erreur est survenue", data : error});
    })
})

module.exports = router;