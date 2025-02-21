const conn = require("./Database")

const FetchPop = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM Pop;`
        conn.query(sql, (err,result) => {
            if (err) {
                return reject(err)
            }
            resolve(result);
        })
    })
}

const FetchPopById = (id) => {
    return new Promise ((resolve, reject) => {
        let sql = `SELECT * FROM pop WHERE ID_Pop = ?`
        conn.query(sql, [id], (err,result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
}

const AddPop = (pop) => {
    return new Promise ((resolve, reject) => {
        let sql = `INSERT INTO pop (Name_Pop, Price_Pop, Height_Pop, 
                    Special_Pop, Chase_Pop, Date_Pop, Number_Pop, ID_License)
                    VALUES(?,?,?,?,?,?,?,?)`
        conn.query(sql, [pop.name, pop.price, pop.height, pop.special,
                        pop.chase,pop.date, pop.number, pop.license ], (err, result) => {
            if (err) {
                return reject(err)
            }
            resolve(result);
        })
    })
}

const DeletePop = (id) => {
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

const DeletePictureById = (id) => {
    return new Promise ((resolve, reject) => {
        let sql = `DELETE FROM pictures WHERE FK_Pop =?`
        conn.query(sql, [id], (err, result) => {
            if (err) {
                return reject(err)
            }
            resolve(result);
        })
    })
}

const updatePop = (pop) => {
    return new Promise((resolve, reject) => {
        let sql = `UPDATE pop SET  Name_Pop = ?, Price_Pop = ?, Height_Pop = ?, Special_Pop = ?, 
        Chase_Pop = ?, Date_Pop = ?, Number_Pop = ?, ID_License = ?  WHERE ID_Pop = ?;`
        conn.query(sql, [pop.name, pop.price, pop.height, pop.special, pop.chase, pop.date, pop.number, 
            pop.license, pop.id], (err,result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        })
    })
}

module.exports = {
    FetchPop,
    FetchPopById,
    AddPop,
    DeletePop,
    updatePop,
    DeletePictureById
}