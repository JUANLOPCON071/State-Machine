import React from "react";
import './Tickets.css'

export const Tickets = ({ send, context }) => {
    const finish = () => {
        send({ type: 'FINISH'})
    }

    return (
        <div className='Tickets'>
            <p className='Tickets-description'>Gracias por volar con book a fly 💚</p>
            <div className='Tickets-ticket'>
                <div className='Tickets-country'>Colombia</div>
                <div className='Tickets-passengers'>
                    <span>✈</span>
                </div>
            </div>
            <button onClick={finish} className='Tickets-finalizar'>
                Finalizar
            </button>
        </div>
    )
}