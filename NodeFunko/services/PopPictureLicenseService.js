const conn = require("./Database")


const FetchPopWithInformation = () => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM pop as p
        LEFT JOIN pictures as pt ON p.ID_Pop = pt.FK_Pop
        JOIN license as l ON p.FK_License = l.ID_License;`
        conn.query(sql, (err,result) => {
            if (err) {
                return reject(err)
            }
            resolve(result);
        })
    })
}

const FetchPopWithInformationById = (id) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM pop as p
        LEFT JOIN pictures as pt ON p.ID_Pop = pt.FK_Pop
        JOIN license as l ON p.FK_License = l.ID_License
        WHERE p.ID_Pop = ?;`
        conn.query(sql,[id], (err,result) => {
            if (err) {
                return reject(err)
            }
            resolve(result[0]);
        })
    })
}


module.exports = {
    FetchPopWithInformation,
    FetchPopWithInformationById
}