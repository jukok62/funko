const express = require('express');
const router = express.Router();
const admin = require ('../services/admin')
const path = require('path');




router.post("/addPop", async (req, res) => {
    try {
        const produit = req.body;

        const nameFile = path.basename(produit.pop.photo);
        produit.pop.photo = nameFile;

         // Ajouter la pop et récupérer son insertId
         const resultProduit = await admin.AddProduit(produit.pop);
         const fkPop = resultProduit.insertId; // Récupération de l'ID du produit inséré

         // Ajouter l'ID du produit à l'image
        produit.pop.fk_Pop = fkPop;

         // Ajouter l'image avec la bonne clé étrangère
         const resultImage = await admin.AddPicture(produit);

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


router.patch('/', async (req, res) => {
    try {
        const produit = req.body
        console.log('clg de produit dans la modification', produit);

        const nameFile = path.basename(produit.pop.photo);

        // console.log('clg de nameFile : ', nameFile);
        produit.pop.photo = nameFile;
        // Modifier la Pop
        const resultProduit = await admin.modifyPop(produit.pop)

         // Ajouter l'image avec la bonne clé étrangère
         const resultImage = await admin.modifyPhoto(produit);
         console.log('clg de resultImage : ', resultImage);

        res.json({ 
            message: "Ajout réussi",
            produit: resultProduit,
            image: resultImage
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur lors de la modification" });
    }
})



router.delete("/deletePop/:id", async (req, res) => {
    const popId = req.params.id;

    try {
        await admin.DeletePictureById(popId);

        await admin.DeletePopById(popId);

        res.json({"message" : "Pop supprimée avec succès et sa photo également"});
    } catch (error) {
        console.error("Erreur lors de la suppression :", error);
        res.status(500).json({ message: "Une erreur est survenue", error });
    }
})

router.get("/license", async (req, res) => {

    admin.getLicense().then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(404).json({ message: "license not found" });
    })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    admin.getPopById(id).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(404).json({ message: "Pop introuvable" });
    })
})





module.exports = router;