import React from 'react';
import "../styles/day.css";

export default function Day({day}) {
    return (
        <section className="day_container">
            <img src={day.image} alt={day.name} className="day_image"/>
            
            <div className="day_text">
                <p>{day.name}</p>
            </div>
        </section>
    )
}
