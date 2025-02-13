import React from 'react';
import '../styles/form.css'

const Form = ({getPop}) => {
    return ( <>
    
        <form>
            <div className="container-form">

                <div className="container-input">
                    <label htmlFor='name'>Nom du produit:</label>
                    <input type="text" name="name" id='name'/>
                </div>

                <div className="container-input">
                    <label htmlFor='price'>Prix:</label>
                    <input type="text" name="price" id='price'/>
                </div>

                <div className="container-input">
                    <label htmlFor='height'>Taille</label>
                    <input type="text" name="height" id='height'/>
                </div>

                <div className="container-input">
                    <label htmlFor='special'>Speciale</label>
                    <select id='special'>
                        <option value="">Oui</option>
                        <option value="">Non</option>
                    </select>
                </div>

                <div className="container-input">
                    <label htmlFor='chase'>Chase</label>
                    <select id='chase'>
                        <option value="">Oui</option>
                        <option value="">Non</option>
                    </select>
                </div>

                <div className="container-input">
                    <label htmlFor='Date'>Date</label>
                    <input type="text" name="date" id='Date'/> 
                </div>   

                <div className="container-input">
                    <label htmlFor='number'>Numéro</label>
                    <input type="text" name="number" id='number'/> 
                </div> 

                <div className="container-input">
                    <label htmlFor='license'>License</label>
                    <select id='license'>
                        <option value="">Naruto</option>
                        <option value="">Demon Slayer</option>
                        <option value="">My Hero Academia</option>
                    </select>  
                </div>     

                <input type="submit" value="Envoyer"/>
            </div>
        </form>
        
    
    </> );
}
 
export default Form;