import React from 'react';
import './Gallery.scss';
// import data from '../../data.json';

import Dario from '../../res/gallery/dario.jpg';
import Bne from '../../res/gallery/bne.jpg';
import Lc from '../../res/gallery/lc.jpg';
import Rafa from '../../res/gallery/rafa.jpg';
import Xico from '../../res/gallery/xico.png';

import PublicoSt from '../../res/gallery/publico_st.jpg';
import PublicoNd from '../../res/gallery/publico_nd.jpg';
import PublicoRd from '../../res/gallery/publico_rd.jpg';


const Gallery = () => {

    return(
        <section id="gallery">
            <div className="famous">
                <div className="box" style={{ backgroundImage : `url(${Dario})`}} title="Dário Costa - Master Chef"></div>
                <div className="box" style={{ backgroundImage : `url(${Lc})`}} title="LC Negão - The Voice Brasil"></div>
                <div className="box" style={{ backgroundImage : `url(${Bne})`}} title="BNE Negão"></div>
                <div className="box" style={{ backgroundImage : `url(${Rafa})`}} title="Rafael da Zimbra"></div>
                <div className="box" style={{ backgroundImage : `url(${Xico})`}} title="Xico Sá"></div>
            </div>
            <div className="event">
                <div className="box" style={{ backgroundImage : `url(${PublicoSt})`}}></div>
                <div className="box" style={{ backgroundImage : `url(${PublicoRd})`}}></div>
                <div className="box" style={{ backgroundImage : `url(${PublicoNd})`}}></div>
            </div>
        </section>
    )
}

export default Gallery;