const conn = require('./Database') 

const AddProduit = (produit) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO pop (Name_Pop, Price_Pop, Height_Pop, Special_Pop, 
            Chase_Pop, Date_Pop, Number_Pop, FK_License) 
            VALUES (?,?,?,?,?,?,?,?);`
        conn.query(sql, [produit.namePop, produit.price, produit.height, produit.special, 
                produit.chase, produit.date, produit.number, produit.license], 
                        (err,result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}


const AddPicture = (image) => {
    return new Promise((resolve, reject) => {
        let sql = `INSERT INTO pictures (Main_Picture, Second_Picture, Other_Picture, FK_Pop) 
            VALUES (?,?,?,?);`
        conn.query(sql, [image.pop.photo, image.second_picture, image.third_picture, image.pop.fk_Pop], 
                        (err,result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const DeletePictureById = (id) => {
    return new Promise ((resolve, reject) => {
        let sql = `DELETE FROM pictures WHERE FK_Pop = ?`
        conn.query(sql, [id], (err, result) => {
            if (err) {
                return reject(err)
            }
            resolve(result);
        })
    })
}

const DeletePopById = (id) => {
    return new Promise ((resolve, reject) => {
        let sql = `DELETE FROM pop WHERE ID_Pop =?`
        conn.query(sql, [id], (err, result) => {
            if (err) {
                return reject(err)
            }
            resolve(result);
        })
    })
}

const getLicense = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM license;`
        conn.query(sql, (err, result) => {
            if (err) {
                return reject(err)
            }
            resolve(result);
        })
    })
}

const getPopById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM pop 
        JOIN pictures on FK_Pop = ID_Pop
        WHERE ID_Pop = ?;`
        conn.query(sql, [id], (err, result) => {
            if (err) {
                return reject(err)
            }
            resolve(result[0]);
        })
    })
}

const modifyPop = (pop) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE pop SET Name_Pop = ?, Price_Pop = ?, Height_Pop = ?, Special_Pop = ?, 
            Chase_Pop = ?, Date_Pop = ?, Number_Pop = ?, FK_License = ? WHERE ID_Pop = ?`
        conn.query(sql, [pop.namePop, pop.price, pop.height, pop.special, 
                        pop.chase, pop.date, pop.number, pop.license, pop.id], 
                        (err,result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

const modifyPhoto = (photo) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE pictures SET Main_Picture = ?  WHERE FK_Pop = ?`
        conn.query(sql, [photo.pop.photo, photo.pop.id], 
                        (err,result) => {
            if (err) {
                return reject(err)
            }
            resolve(result);
        })
    })
}

module.exports = {
    AddProduit,
    AddPicture,
    DeletePictureById,
    DeletePopById,
    getLicense,
    getPopById,
    modifyPop,
    modifyPhoto
}