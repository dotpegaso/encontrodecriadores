import React from 'react'
import data from '../../data.json'
import './Agenda.scss'

data.calendario.shift()

const Agenda = () => (

    <div className="agenda">
        
        <p className="disclaimer">
            <span>Se liga nos próximos rolês!</span>
        </p>

        {
            data.calendario.map( (evento, index) => (
                <div className="evento" key={index}>
                    <p>{evento.nome}</p>
                    <p>{evento.data}</p>
                </div>
            ))
        }
    </div>

)

export default Agenda;