import React from 'react';
import '../styles/form.css'

const Form = ({getPop, handleChangeAdd, addPop, licenses, newPop}) => {

    console.log('clg de addPop dans component : ', addPop);
    return ( <>
    
        <form>
            <div className="container-form">

                <div className="container-input">
                    <label htmlFor='name'>Nom du produit:</label>
                    <input type="text" name="namePop" id='name' onChange={handleChangeAdd}/>
                </div>

                <div className="container-input">
                    <label htmlFor='price'>Prix:</label>
                    <input type="text" name="price" id='price' onChange={handleChangeAdd} />
                </div>

                <div className="container-input">
                    <label htmlFor='height'>Taille</label>
                    <input type="text" name="height" id='height' onChange={handleChangeAdd}/>
                </div>

                <div className="container-input">
                    <label htmlFor='special'>Speciale</label>
                    <select id='special' name='special' onChange={handleChangeAdd}>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                </div>

                <div className="container-input">
                    <label htmlFor='chase'>Chase</label>
                    <select id='chase' name='chase' onChange={handleChangeAdd}>
                        <option value="Oui">Oui</option>
                        <option value="Non">Non</option>
                    </select>
                </div>

                <div className="container-input">
                    <label htmlFor='Date'>Date</label>
                    <input type="text" name="date" id='Date' onChange={handleChangeAdd}/> 
                </div>   

                <div className="container-input">
                    <label htmlFor='number'>Numéro</label>
                    <input type="text" name="number" id='number' onChange={handleChangeAdd}/> 
                </div> 

                <div className="container-input">
                    <label htmlFor='license'>License</label>
                    <select id='license' onChange={handleChangeAdd} name='license'>
                        {licenses.map((license) => (
                            <option key={license.id} value={license.ID_License}>
                                {license.Name_License}
                            </option>
                        ))}
                    </select>  
                </div>  

                <div className="container-input">
                        <label htmlFor="photo">photo : </label>
                        <input type="file" name='photo' onChange={handleChangeAdd} />
                </div>   

                <input type="submit" value="Envoyer"  onClick={newPop}/>
            </div>
        </form>
        
    
    </> );
}
 
export default Form;