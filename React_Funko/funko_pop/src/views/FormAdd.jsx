import React, {useEffect, useState} from 'react';
import Form from '../components/Form';
import adminService from '../services/adminService'

const FormAdd = () => {

    const [license, setLicense] = useState([]);
    const [addPop, setAddPop] = useState({
        namePop : '',
        price : '',
        height : '',
        special : '',
        chase : '',
        date : '',
        number : '',
        license : '',
        photo : '',
        fk_pop : ''
    });

    const handleChangeAdd = (e) => {
        const{name,value} = e.currentTarget;
        
        if(name === 'price' || name === 'height' || name === 'special' || name === 'chase' || name === 'number' || name === 'license'){
            const numericValue = parseInt(value, 10);

            if(!isNaN(numericValue)) {
                setAddPop({...addPop, [name]: numericValue });
            } else {
                setAddPop({...addPop, [name]: 0 });
            }
        } else {
            setAddPop({...addPop, [name]: value });
        }
        console.log('clg de addPop dans view : ',addPop);
    }

    const getLicense = async () => {
        try {
            const response = await adminService.getLicense()
            setLicense(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getLicense();
    },[])

    const fetchPop = async (e) => {
        e.preventDefault();
        try {
            const response = await adminService.addPop(addPop)
            console.log('clg du pop envoyé : ', response);
        } catch (e) {
            console.log(e);
        }
    }
    

    return ( <>
    
    <Form handleChangeAdd={handleChangeAdd} addPop={addPop} licenses={license} newPop={fetchPop}/>
    
    </> );
}
 
export default FormAdd;