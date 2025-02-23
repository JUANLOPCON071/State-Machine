import React from "react";
import './Tickets.css'

export const Tickets = ({ send, context }) => {
    const finish = () => {
        send({ type: 'FINISH'})
    }

    return (
        <div className='Tickets'>
            <p className='Tickets-description'>Gracias por volar con Milofly 💚</p>
            <div className='Tickets-ticket'>
                <div className="Tickets-route">
                    <span>Colombia</span>
                    <span className="Tickets-arrow"> ➝ </span>
                    <span>{context.selectedCountry || "Destino desconocido"}</span>
                </div>
                <div className='Tickets-passengers'>
                    <div className='Tickets-header'>
                        <span className='Tickets-icon'>✈</span>
                        <p>Pasajeros</p>    
                    </div>
                    <ul className='Tickets-list'>
                        {context.passengers.map((person, idx) => {
                            return <li key={idx}>{person}</li>
                        })}
                    </ul>
                </div>
            </div>
            <button onClick={finish} className='Tickets-finalizar'>
                Finalizar
            </button>
        </div>
    )
}