import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/navBar.css'
import IconMenu from '../../src/asset/icons/menu.png'
import kurama from '../asset/logo/kurama-png.png'
import IconClose from '../asset/icons/close.png'
import adminImage from '../asset/icons/admin.png'

const NavBar = () => {

    const navigate = useNavigate();
    const [categorie, setCategorie] = useState(false);
    const [license, setLicense] = useState(false);
    const [souligneCategorie, setSouligneCategorie] = useState(false);
    const [souligneLicense, setSouligneLicense] = useState(false);


    const categorieActive = () => {
        setCategorie(!categorie);
        setLicense(false)
        setSouligneLicense(false)
    } 
    const licenseActive = () => {
        setLicense(!license);
        setCategorie(false)
        setSouligneCategorie(false)
    } 

    const soulignCategorieActive = () => {
        setSouligneCategorie(!souligneCategorie);
    }

    const soulignLicenseActive = () => {
        setSouligneLicense(!souligneLicense);
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

        <div className='container-categorie'  onClick={() => soulignCategorieActive()}>
            <p className={`souligne ${souligneCategorie ? 'souligne-click' : ''}`} onClick={() => categorieActive()}>CATEGORIES</p>
        </div>

        {categorie && (
            <div className='under-categorie'>
                <img className='icon-close' onClick={() => {setCategorie(false);}} src={IconClose} alt="" />
                <p>Manga</p>
                <p>Manga</p>
                <p>Manga</p>
            </div>
        )}

        <div className='container-categorie' onClick={() => soulignLicenseActive()}>
            <p className={`souligne ${souligneLicense ? 'souligne-click' : ''}`} onClick={() => licenseActive()} >LICENSE</p>
        </div>

        {license && (
            <div className='under-categorie'>
                <img className='icon-close' onClick={() =>{ 
                    setLicense(false); 
                    setSouligneCategorie(false);
                    setSouligneLicense(false)}} 
                    src={IconClose} alt="" 
                />
                <p>Naruto</p>
                <p>Demon Slayer</p>
                <p>My Hero Academia</p>
            </div>
        )}
        
        <div className="admin-container">
            <img src={adminImage} alt="" onClick={() => {navigate('/admin')}}/>
        </div>

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