import axios from 'axios'


const deleteProduit = (id) => {
    return axios.delete(`http://127.0.0.1:8080/admin/deletePop/`+id 
)}

export default {
    deleteProduit
}