const express = require('express');
const router = express.Router();
const allPop = require('../services/PopPictureLicenseService');

router.get('/', (req,res) => {
    allPop.FetchPopWithInformation().then((result) => {
        res.json(result)
        console.log(result);
    }).catch(err => {
        console.log(err);
        res.json({message : "Une erreur est survenue"})
    })
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    allPop.FetchPopWithInformationById(id).then((result) => {
        res.json(result)
    }).catch(err => {
        console.log(err);
        res.json({message : "Une erreur est survenue"})
    })
})

module.exports = router;