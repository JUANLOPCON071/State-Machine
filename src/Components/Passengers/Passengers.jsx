import React, { useState } from "react";
import './Passengers.css'

export const Passengers = ({ state, send }) => {
    const [value, changeValue] = useState('');
    const [showLimitAlert, setShowLimitAlert] = useState(false);

    const passengers = state.context.passengers;

    const goToTicket = () => {
        send({ type: 'DONE'})
    }

    const onChangeInput = (e) => {
        changeValue(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();

        if (passengers.length >= 5) {
            setShowLimitAlert(true);
            return;
        }

        send({ type: 'ADD', newPassenger: value})
        changeValue('');
    }

    const closeLimitAlert = () => {
        setShowLimitAlert(false);
        changeValue('');
    }

    return (
        <form onSubmit={submit} className='Passengers'>
            <p className='Passengers-title'>
                Agregar a las personas que van a volar ✈️
            </p>
            <input
                id="name" 
                name="name"
                type="text"
                placeholder='Escribe el nombre completo'
                required
                value={value}
                onChange={onChangeInput} 
            />
            <ul className="Passengers-list">
                {passengers.map((passenger, index) => (
                    <li key={index} className="Passenger-item">
                        {passenger}
                    </li>
                ))}
            </ul>
            <div className='Passengers-buttons'>
                <button className='Passengers-add' type="submit">
                    Agregar Pasajero
                </button>
                <button onClick={goToTicket} className='Passenger-pay' type="button">
                    Ver mi ticket
                </button>
            </div>
            {showLimitAlert && (
                <div className='modal-overlay'>
                    <div className='modal-content'>
                        <p>⚠️ ¡Has alcanzado el límite de 5 pasajeros!</p>
                        <button onClick={closeLimitAlert}>Aceptar</button>
                    </div>
                </div>
            )}
        </form>
    )
}