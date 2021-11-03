import React from 'react';
import Day from '../components/Day';
import days from '../hooks/data';
import "../styles/days.css"

export default function Days() {
    return (
        <section className="days_container">
            <div className="day_list">
                {days.map((day) =>(
                    <Day day={day} key={day.id}/>
                ))}
            </div>
        </section>
    )
}
