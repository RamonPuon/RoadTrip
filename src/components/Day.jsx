import React from 'react';
import "../styles/day.css";

export default function Day({day}) {
    return (
        <section className="day_container">
            <img src={day.image} alt={day.name} className="day_image"/>
            
            <div className="day_text">
                <h2>{day.name}</h2>
                <p>{day.description}</p>
            </div>
        </section>
    )
}
