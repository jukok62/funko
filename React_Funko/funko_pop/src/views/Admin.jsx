import React, {useState, useEffect} from 'react';
import produit from '../services/PopServices'
import AdminComponent from '../components/AdminComponent';
import admin from '../services/adminService'

const Admin = () => {

    const [pop, setPop] = useState([]);

    // Recupère mes pops
    const getPop = async () => {
        try {
            const response = await produit.GetPop()
            setPop(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    // Supprimer mes Pops

    const deletePop = async (id) => {
        try {
            const response = await admin.deleteProduit(id)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPop();
    },[]);
    return ( <>
    
        <AdminComponent produits={pop} deletePop={deletePop} getPop={getPop}/>
    
    </> );
}
 
export default Admin;