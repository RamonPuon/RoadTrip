import React from 'react';
import "../styles/app.css";
import Map from '../components/Map';
import "../styles/layout.css";
import Days from '../containers/Days';


export default function App() {
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
