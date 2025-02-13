import React from 'react';
import '../styles/CardPop.css' 


const PopComponents = ({pop}) => {

    
console.log('clg de pop dans component : ' , pop);
    


    return ( <>
        
      <div className='flex-container'>
        {pop.map((po) => (
             <div className='pop-card' key={po.ID_Pop}>
                <p>{po.Name_Pop}</p>
                <img className='picture-size'
                            src={process.env.PUBLIC_URL + `/photos/${po.Main_Picture}`}
                            alt={po.Main_Picture}
                />
            </div>
        ))}
      </div>
        
    
      
       

    </> );
}
 
export default PopComponents;