import React from 'react';

const Evento = ({data, handleMaps, handleFacebookEvent}) => (

    <div className="evento">
        { data.evento.url_video_promocional && 
            <div className="video">
                <iframe title="preview" src={`https://player.vimeo.com/video/${data.evento.url_video_promocional}`}frameBorder="0"></iframe>
            </div>
        }

        <p className="next-meetup">
            Próximo encontro - <b>{data.evento.data}</b>
        </p>

        <p className="meetup-name">
            <span>{data.evento.nome}</span>
        </p>

        <p className="meetup-address" onClick={handleMaps}>
            {data.evento.local}
        </p>

        <p className="meetup-time">
            {data.evento.horario}
        </p>

        <button className="btn" onClick={handleFacebookEvent}>
            <b>MARQUE PRESENÇA</b>
        </button>
    </div>

)

export default Evento;