import React, { useState } from "react";
import './Search.css';

export const Search = ({ state, send }) => {
    const [flight, setFlight] = useState('');

    const goToPassengers = () => {
        send({ type: 'CONTINUE', selectedCountry: flight})
    }

    const handleSelectChange = (event) => {
        setFlight(event.target.value);
    };

    const options = state.context.countries;

    return (
        <div className='Search'>
            <p className='Search-title'>Busca tu destino</p>
            <select 
                id='country' 
                className="Search-select" 
                value={flight} 
                onChange={handleSelectChange}
            >
                <option value="" disabled defaultValue>Escoge un destino</option>
                {options.map((option) => 
                    <option value={option.name.common} key={option.name.common}>{option.name.common}</option>
                )}
            </select>
            <button 
                disabled={flight === ''}
                onClick={goToPassengers}
                className='Search-continue'
            >
                Continuar
            </button>
        </div>
    )
}