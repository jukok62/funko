import React from 'react';
import '../styles/CardPop.css' 
import IconPrice from '../asset/icons/price.png'


const PopComponents = ({pop}) => {

    
console.log('clg de pop dans component : ' , pop);
    


    return ( <>
        
      <div className='flex-container'>
        {pop.map((po) => (
             <div className='pop-card' key={po.ID_Pop}>
                <p>{po.Name_Pop} - {po.Number_Pop}</p>
                <img className='picture-size'
                            src={process.env.PUBLIC_URL + `/photos/${po.Main_Picture}`}
                            alt={po.Main_Picture}
                />
                <div className='container-calendar'>
                  <div className="calendar">
                    <div className="calendar-deco">
                      <p></p>
                      <p></p>
                      <p></p>
                    </div>
                    <div className="calendar-deco2"></div>
                    <p className='calendar-date'>{po.Date_Pop}</p>
                  </div>

                  <div className="price-card">
                    <img className='price-image' src={IconPrice} alt="" />
                    <p>{po.Price_Pop}€</p>
                  </div>
                </div>
            </div>
        ))}
      </div>
        
    
      
       

    </> );
}
 
export default PopComponents;