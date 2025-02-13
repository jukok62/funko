const express = require('express');
const router = express.Router();
const admin = require ('../services/admin')
const path = require('path');


router.post("/addPop", async (req, res) => {
    try {
        const produit = req.body;
        console.log("clg de produit ", produit);

         // Ajouter la pop et récupérer son insertId
         const resultProduit = await admin.AddProduit(produit.pop);
         const fkPop = resultProduit.insertId; // Récupération de l'ID du produit inséré

         console.log("ID de la pop insérée :", fkPop);

         // Ajouter l'ID du produit à l'image
        produit.image.fk_pop = fkPop;

         // Ajouter l'image avec la bonne clé étrangère
         const resultImage = await admin.AddPicture(produit.image);

        res.json({ 
            message: "Ajout réussi",
            produit: resultProduit,
            image: resultImage
        });

    } catch (error) {
        console.error("Erreur lors de l'ajout :", error);
        res.status(500).json({ message: "Une erreur est survenue", error });
    }
});

router.delete("/deletePop/:id", async (req, res) => {
    const popId = req.params.id;
    console.log(popId);

    try {
        await admin.DeletePictureById(popId);

        await admin.DeletePopById(popId);

        res.json({"message" : "Pop supprimée avec succès et sa photo également"});
    } catch (error) {
        console.error("Erreur lors de la suppression :", error);
        res.status(500).json({ message: "Une erreur est survenue", error });
    }
})

router.get('/license'), (req, res) => {
    admin.getLicense().then((result) =>{
        res.json(result);
    }).catch((error) =>{
        console.log(error);
        res.json({message : "une erreur est survenue"})
    })
}



module.exports = router;