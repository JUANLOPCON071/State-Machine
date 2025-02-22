import React, { useState } from "react";
import './Nav.css';

export const Nav = ({ state, send }) => {
    const [showModal, setShowModal] = useState(false);

    const handleCancelClick = () => {
        setShowModal(true);
    };

    const confirmCancel = () => {
        send({ type: 'CANCEL'});
        setShowModal(false);
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <nav className='Nav'>
            <h1 className='Nav-logo'>Milo a fly ✈</h1>
            {!state.matches('initial') && !state.matches('tickets') && 
                <button 
                    className='Nav-cancel'
                    onClick={handleCancelClick}
                >
                    Cancelar
                </button>
            }
            {showModal && (
                <div className='modal-overlay'>
                    <div className='modal-content'>
                        <h2>Confirmar cancelación</h2>
                        <p>¿Estás seguro de que deseas cancelar la reserva?</p>
                        <div className='modal-buttons'>
                            <button onClick={confirmCancel} className='confirm-btn'>
                                Sí, cancelar
                            </button>
                            <button onClick={closeModal} className='cancel-btn'>
                                No, volver
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}