import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import '../styles/admin.css'
import buttonDelete from '../asset/icons/delete.png';
import buttonModify from '../asset/icons/modify.png';
import buttonAdd from '../asset/icons/ajouter.png'
import Form from './Form';

const AdminComponent = ({produits, deletePop, getPop}) => {

    const [refresProduits, setRefreshProduits] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(refresProduits){
            getPop();
            setRefreshProduits(false)
        }
    },[refresProduits])

    console.log(refresProduits);

    return ( <>

    <div className="container-buttonAdd">
        <Link to='/formAdd'>
            <img src={buttonAdd} alt="" />
        </Link>
    </div>
    
    <table>
        <thead>
            <tr>
                <th className=''>Image</th>
                <th className=''>Nom</th>
                <th  className=''>Numéro</th>
                <th className=''>Chase</th>
                <th className=''>Speciale</th>
                <th className=''>Modifier/Supprimer</th>
            </tr>
        </thead>
        <tbody>
        {produits.map ((prod) => (
            <tr>
                <td><img src={process.env.PUBLIC_URL +`/photos/${prod.Main_Picture}`}   height={50} alt="Produit" className=''/></td>
                <td>{prod.Name_Pop}</td>
                <td>{prod.Number_Pop}</td>
                <td className=''>{prod.Chase_Pop}</td>
                <td className=''> {prod.Special_Pop} / {prod.ID_Pop}</td>  
                <td>
                    <div className='container-button-admin'>
                        <Link to={`/formModify/${prod.ID_Pop}`}>
                            <img src={buttonModify} alt="" />
                        </Link>
                        <img src={buttonDelete} className='button-delete' alt="" onClick={() => {deletePop(prod.ID_Pop);
                                                                      setRefreshProduits(true)}}/>
                    </div>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
    
    </> );
}
 
export default AdminComponent;