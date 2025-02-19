import React from "react";
import { Welcome } from "../../Components/Welcome/Welcome";
import { Search } from "../../Components/Search/Search";
import { Tickets } from "../../Components/Tickets/Tickets";
import { Passengers } from "../../Components/Passengers/Passengers";
import './StepsLayout.css';

export const StepsLayout = ({ state, send }) => {
    const renderContent = () => {
        if(state.matches('initial')) return <Welcome send={send}/>
        if(state.matches('search')) return <Search send={send}/>
        if(state.matches('tickets')) return <Tickets send={send}/>
        if(state.matches('passengers')) return <Passengers send={send}/>
        return null;
    };

    return (
        <div className="StepsLayout">
            {renderContent()}
        </div>
    )
}