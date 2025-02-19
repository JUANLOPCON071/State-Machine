import React from "react";
import './Welcome.css'

export const Welcome = ({ send }) => {
    const startBooking = () => {
        send({ type : 'START'});
    }

    return (
        <div className="Welcome-container">
            <p className="Welcome-title">¡Hoy es el dia!</p>
            <p className="Welcome-description">
                Compra tu vuelo y conoce un nuevo rincon del mundo,
                te va a sorprender las maravillas que hay para explorar
            </p>
            <button onClick={startBooking} className="Welcome-button">Comenzar</button>
        </div>
    )
}