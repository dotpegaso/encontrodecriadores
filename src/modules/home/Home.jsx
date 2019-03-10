import React from 'react';
import './Home.scss';
import Evento from './Evento';
import Calendario from './Calendario';
import data from '../../data.json';

import Logo from '../../res/home/Logo';

import Insta from '../../res/common/Insta';
import Face from '../../res/common/Face';

const Home = (props) => {

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

    const handleFacebookEvent = () => {
        window.open(
            `${data.evento.url_evento_facebook}`,
            '_blank'
        )        
    }

    const handleMaps = () => {
        window.open(
            `https://www.google.com/maps/place/${data.evento.local}`, '_blank'
        )
    }

    const loadContent = () =>{
        
        if(data.config.evento_ativo){
            return <Evento data={data} handleMaps={handleMaps} handleFacebookEvent={handleFacebookEvent} />
        }else{
            return <Calendario data={data} />
        }
    }
    
    return(
        <section id="home">

           <div className="intro">

                <div className="sea">
                    <span className="wave"></span>
                    <span className="wave"></span>
                    <span className="wave"></span>
                </div>

                <div className="header">
                    <Insta fill="#ebff00" onClick={handleInstagram} />
                    <Logo fill="#ebff00" />
                    <Face fill="#ebff00" onClick={handleFacebook} />
                </div>

                <p className="first">
                    Construindo <br/> experiências <br/>
                    <b>lindonas</b>
                </p>

                <button className="btn" onClick={props.modal}>
                   <b>MOSTRA A TUA IDEIA PRA GENTE</b>
                </button>

                <p className="last">
                    Conectando mentes, <br/>
                    sonhos e <br/>
                    <b>oportunidades</b>.
                </p>

           </div>

           <div className="poster">

                { loadContent() }

           </div>

        </section>
    )
}

export default Home;