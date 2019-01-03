import React from 'react';
import './Schedule.scss';
import data from '../../data.json';

const Schedule = () => {

    let datas = Object.keys(data.evento.programacao);      
    
    const handleFacebookEvent = () => {
        window.open(
            `${data.evento.url_evento_facebook}`,
            '_blank'
        )        
    }
    
    return(
        <section id="schedule">
            <div className="header">
                <p>
                    Se liga na programação do <br/>
                    <b>{data.evento.nome}</b>
                </p>
            </div>
            <div className="container">

                <div className="poster" style={{backgroundImage : `url(${data.evento.poster})`}}></div>

                {datas.map((D, key) => (
                    <div className="day" key={key}>

                        <p><span>DIA - {D}</span></p>
                        <br/>
                        
                        {
                            Object.keys(data.evento.programacao[D]).map((H, key) => (
                                <div key={key}>
                                    <p>{`${H} - ${data.evento.programacao[D][H]}`}</p>
                                    <br/>
                                </div>
                            ))
                        }

                    </div>
                ))
                }
            </div>
            <div className="action">
                <button className="btn" onClick={handleFacebookEvent}>
                    <b>CHEGA AÍ, COLA MAIS</b>
                </button>
            </div>
        </section>
    )
}

export default Schedule;