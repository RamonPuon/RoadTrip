import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "../styles/app.css"


export default function App() {
    return (
        <div className="map">
            <MapContainer center= {[16.826665, -93.072278]} zoom = {13} scrollWheelZoom = {false}>
                <TileLayer
                    attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position = {[16.826665, -93.072278]}>
                    <Popup>
                        Cañón del sumidero
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
