import React from 'react';
import './Footer.scss';
import data from '../../data.json';
import Encontro from '../../res/footer/encontro.png';
import Insta from '../../res/common/Insta';
import Face from '../../res/common/Face';

import ArcanoZero from '../../res/footer/arcanozero.png';
import ArteNoDique from '../../res/footer/artenodique.png';
import Bujas from '../../res/footer/bujas.png';
import Janelas from '../../res/footer/janelas.png';
import Juicy from '../../res/footer/juicy.png';
import SeloCriativo from '../../res/footer/selocriativo.png';
import SantosJazz from '../../res/footer/santosjazz.png';
import Unimonte from '../../res/footer/unimonte.png';
import Nove from '../../res/footer/nove.png';

const Footer = () => {

    const handleInstagram = () => {
        window.open(
            `${data.config.instagram_url}`,
            '_blank'
        )
    }

    const handleFacebook = () => {
        window.open(
            `${data.config.facebook_page_url}`,
            '_blank'
        )        
    }
    
    return(
        <section id="footer">

            <div className="header">
                <p>Colab</p>
            </div>

            <div className="container">
                <a href="https://www.unimonte.br/" target="_blank" rel="noopener noreferrer"><img src={Unimonte} alt=""/>                    </a>
                <a href="http://revistanove.com.br/" target="_blank" rel="noopener noreferrer"><img src={Nove} alt=""/>     </a>
                <a href="http://arcanozero.com" target="_blank" rel="noopener noreferrer"><img src={ArcanoZero} alt=""/></a>
                <a href="https://www.artenodique.org/" target="_blank" rel="noopener noreferrer"><img src={ArteNoDique} alt=""/></a>
                <a href="https://www.juicysantos.com.br/" target="_blank" rel="noopener noreferrer"><img src={Juicy} alt=""/></a>
                <a href="http://www.janelas.tv.br/" target="_blank" rel="noopener noreferrer"><img src={Janelas} alt=""/></a>
                <a href="https://facebook.com/bujasbar/" target="_blank" rel="noopener noreferrer"><img src={Bujas} alt=""/></a>
                <a href="https://www.selocriativo.com/" target="_blank" rel="noopener noreferrer"><img src={SeloCriativo} alt=""/></a>
                <a href="https://www.santosjazzfestival.com.br/" target="_blank" rel="noopener noreferrer"><img src={SantosJazz} alt=""/></a>
            </div>

            <div className="credits">
                <div className="box">
                    <img src={Encontro} alt="Encontro de Criadores"/>
                </div>
                <div className="box">
                    <p>CONTATO_</p>
                    <a href="mailto:encontrodecriadores.adm@gmail.com">{`encontrodecriadores.adm@gmail.com`}</a>
                </div>
                <div className="box">
                    <p>SOCIAL_</p>
                    <Insta fill="#ebff00" onClick={handleInstagram} />
                    <Face fill="#ebff00" onClick={handleFacebook} />
                </div>
                <div className="box">
                    <p>SITE_</p>
                    <a href="https://dotpegaso.com.br" target="_blank" rel="noopener noreferrer">Desenvolvido por dotpegaso</a>
                </div>
            </div>
        </section>
    )
}

export default Footer;