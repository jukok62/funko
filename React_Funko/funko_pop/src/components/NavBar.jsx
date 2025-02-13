import React, {useState} from 'react';
import '../styles/navBar.css'
import IconMenu from '../../src/asset/icons/menu.png'
import kurama from '../asset/logo/kurama-png.png'

const NavBar = () => {

    const [categorie, setCategorie] = useState(false);
    const [license, setLicense] = useState(false);

    const categorieActive = () => {
        setCategorie(!categorie);
        setLicense(false)
    } 
    const licenseActive = () => {
        setLicense(!license);
        setCategorie(false)
    } 

    return ( <>
    
    <div className='container-navBar'>
        <div className='container-img'>
            <img src={IconMenu} alt="menu" />
        </div>
        <div className='container-title'>
            <img src={kurama} alt="" className='kurama' />
            <p className='title-navBar'>Manga Pop</p>
        </div>
        <div className='container-categorie'>
            <p onClick={() => categorieActive()}>CATEGORIES</p>
        </div>
        {categorie && (
            <div className='under-categorie'>
                <p>Manga</p>
                <p>Manga</p>
                <p>Manga</p>
            </div>
        )}
        <div className='container-categorie'>
            <p onClick={() => licenseActive()} className=''>LICENSE</p>
        </div>
        {license && (
            <div className='under-categorie'>
                <p>Naruto</p>
                <p>Demon Slayer</p>
                <p>My Hero Academia</p>
            </div>
        )}
        

    </div>

    {/* <div className='navbar-test'>
        <div className='div-img'>
            <img src={IconMenu} alt="" />
        </div>
        <div className='div-title'>
            <p>MANGA POP</p>
        </div>
        <div className='div-cat'>
            <p onClick={() => menuActive() }>Categories</p>
            {active &&
                <div className='div-cat-2'>
                    <p>Manga</p>
                    <p>Manga</p>
                    <p>Manga</p>
                </div>
            }
        </div>
        <div className='div-cat'>
            <p>License</p>
        </div>
    </div> */}
    
    </> );
}
 
export default NavBar;