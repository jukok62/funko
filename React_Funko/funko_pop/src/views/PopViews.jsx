import React, {useEffect, useState} from 'react';
import PopComponents from '../components/PopComponents';
import popServices from '../services/PopServices' 
import NavBar from '../components/NavBar';


const PopView = () => {

    const [pops, setPops] = useState([]);

    // Récupère tous mes Pops
    const getPop = async () => {
        try {
            const response = await popServices.GetPop()
            setPops(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getPop();
    },[])

    console.log('clg de pops dans views : ' , pops);

    return ( <>
        <NavBar/>
        <h1>Pop View</h1>
        <div>
         <PopComponents  pop={pops}/>
        </div>
        
    
    </> );
}
 
export default PopView;