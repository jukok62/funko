import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import adminService from '../services/adminService'
import Form from '../components/Form';


const FormModify = () => {

    const id = useParams()
    const [popById, setPopById] = useState([]);
    const [licenses, setLicenses] = useState([]);
    const navigate = useNavigate();

    const [popModify, setPopModify] = useState({
        id: '',
        namePop: '',
        price: '',
        height: '',
        special: '1',
        chase: '1',
        date: '',
        number: '',
        license: '',
        photo : '',
        license: '',
        fk_pop : '',
    });

    const modifyPop = async (e) => {
        e.preventDefault();
    
        const updatedPop = {
            ID_Pop: popById.ID_Pop,
            Name_Pop: popModify.namePop || popById.Name_Pop,  // Ici on utilise `||` au lieu de `??`
            Price_Pop: popModify.price || popById.Price_Pop,
            Height_Pop: popModify.height || popById.Height_Pop,
            Special_Pop: popModify.special || popById.Special_Pop,
            Chase_Pop: popModify.chase || popById.Chase_Pop,
            Date_Pop: popModify.date || popById.Date_Pop,
            Number_Pop: popModify.number || popById.Number_Pop,
            FK_License: popModify.license || popById.FK_License,
            photo: popModify.photo || popById.photo
        };
    
        console.log("Données envoyées :", updatedPop);
    
        try {
            const response = await adminService.modifyPop(updatedPop);
            if(response.status === 200) {
                navigate('/admin');
            }
        } catch (e) {
            console.log(e);
        }
    };

    // handleChange pour récupérer la valeur dans l'input de recherche
    const handleChange = (e) => {
        const{name,value} = e.currentTarget;
        
        if(name === 'price' || name === 'height' || name === 'special' || name === 'chase' || name === 'number' || name === 'license'){
            const numericValue = parseInt(value, 10);

            if(!isNaN(numericValue)) {
                setPopModify({...popModify, [name]: numericValue });
            } else {
                setPopModify({...popModify, [name]: 0 });
            }
        } else {
            setPopModify({...popModify, [name]: value });
        }
        console.log('clg de popModify dans view : ',popModify);
    }

    const ModifyPop = async (e) => {
        e.preventDefault();
        try {
            const response = await adminService.modifyPop(popModify)
            console.log('clg du pop ajouté : ',response);
            if(response.status === 200) {
                navigate('/admin');
            }
        } catch (e) {
            console.log(e);
        }
    }


    const getPopById = async () => {
        try {
            const response = await adminService.getPopById(id.id);
            setPopById(response.data)
            console.log(response);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getLicenses = async () => {
        try {
            const response = await adminService.getLicenses()
            setLicenses(response.data)
            // setLicenses(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPopById();
        getLicenses();
    },[])

    // Inserer l'id dans popModify

    useEffect(() => {
        if (popById) {
            setPopModify(prev => ({ ...prev, id: popById.ID_Pop }));
        }
    }, [popById]);
    
    return ( <>
    
        <Form/>
    
    </> );
}
 
export default FormModify;