import React from 'react';
import './Footer.scss';
import data from '../../data.json';
import ColabSt from '../../res/footer/colab_st.png';
import ColabNd from '../../res/footer/colab_nd.png';
import Encontro from '../../res/footer/encontro.png';
import Insta from '../../res/common/Insta';
import Face from '../../res/common/Face';

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
                <p>Galera que fortalece a cena</p>
            </div>

            <div className="container">
                <img src={ColabSt} alt=""/>
                <img src={ColabNd} alt=""/>                    
            </div>

            <div className="credits">
                <div className="box">
                    <img src={Encontro} alt="Encontro de Criadores"/>
                </div>
                <div className="box">
                    <p>CONTATO_</p>
                    <a href="mailto:curadoria@encontrodecriadores.art">{`curadoria@\nencontrodecriadores.art`}</a>
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