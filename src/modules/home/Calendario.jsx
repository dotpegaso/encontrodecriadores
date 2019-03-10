import React from 'react';

const Calendario = ({data}) => (

    <div className="calendario">
        
        <p className="disclaimer">
            <span className="calendar" role="img" aria-label="calendar">📅</span>
            <br/>
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