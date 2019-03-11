import React from 'react';

const Calendario = ({data}) => (

    <div className="calendario">

            { data.evento.url_video_promocional && 
                <div className="video">
                    <iframe title="preview" src={`https://player.vimeo.com/video/${data.evento.url_video_promocional}`}frameBorder="0"></iframe>
                </div>
            }
        
        <p className="disclaimer">
            Fica ligado nos próximos rolês pra marcar presença
        </p>

        {
            
            data.calendario.map( evento => (
                <div className="evento">
                    <p>{evento.nome}</p>
                    <p>{evento.data}</p>
                </div>
            ))
        }
    </div>

)

export default Calendario;