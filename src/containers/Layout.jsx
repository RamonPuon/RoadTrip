import React from 'react';
import "../styles/layout.css";
import Map from '../components/Map';
import Days from './Days';

export default function Layout() {
    return (
        <div className="layout">
            <div className="map">
                <Map/>
            </div>
            <div className="days_container">
                <Days/>
            </div>
       </div>
    )
}
