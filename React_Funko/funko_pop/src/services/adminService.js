import axios from 'axios'


const deleteProduit = (id) => {
    return axios.delete(`http://127.0.0.1:8080/admin/deletePop/`+id 
)}

const getPopById = (id) => {
    return axios.get(`http://127.0.0.1:8080/admin/`+id)
}

const getLicense = () => {
    return axios.get(`http://127.0.0.1:8080/admin/license`)
}

const addPop = (pop) => {
    return axios.post(`http://127.0.0.1:8080/admin/addPop`, pop, 
        {
            headers : {
            'Content-Type': 'application/json'
        }}
    )
}



export default {
    deleteProduit,
    getPopById,
    getLicense,
    addPop
}