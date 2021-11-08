import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

export default function Map() {

    //Polyline, the list of coordinates can be joined by a line
    const polyline = [
        [16.9414645,-93.7353673],
        [16.808305,-93.473594],
        [16.826665, -93.072278],
        [16.7313638,-92.6774193]
        
    ]

    //Create a variable for the color
    const blue = {color: "blue"};

    return (
        <div className="map">
             <MapContainer center= {[16.826665, -93.072278]} zoom = {10} scrollWheelZoom = {false}>
                <TileLayer
                    attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position = {[16.826665, -93.072278]}>
                    <Popup>
                        Cañón del sumidero
                    </Popup>
                </Marker>

                <Marker position= {[16.808305,-93.473594]}>
                    <Popup>
                        Sima de las Cotorras
                    </Popup>
                </Marker>

                <Marker position= {[17.5253583,-92.0185781]}>
                    <Popup>
                        Palenque
                    </Popup>
                </Marker>

                <Marker position= {[16.7313638,-92.6774193]}>
                    <Popup>
                        San Cristobal de las Casas
                    </Popup>
                </Marker>

                <Marker position = {[16.9414645,-93.7353673]}>
                    <Popup>
                        El arco del tiempo
                    </Popup>
                </Marker>
                <Polyline pathOptions={blue} positions={polyline}/>
            </MapContainer>
        </div>
    )
}
