import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import {MarkerDrag} from "leaflet/src/layer/marker/Marker.Drag";


function RenderMap() {
    //Constante de posicion en santiago centro chile
    const position = [-33.451041, -70.681286];
    const position2 = [-33.444558, -70.654752];


    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/557/557828.png",
        iconSize: [33, 33]
    })


    return(
        <>
            <div className="map" id="map" >
                <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={customIcon}>
                        <Popup>
                            Pizzas DIN. <br /> Sede Usach
                        </Popup>
                    </Marker>

                    <Marker position={position2} icon={customIcon}>
                        <Popup>
                            Pizzas DIN. <br /> Sede la Moneda
                        </Popup>
                    </Marker>
                </MapContainer>
                </div>



        </>

    );

}

function MyMap() {
    const position = [51.505, -0.09]

    return(
        <div className="map">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="map__title">¿Dónde estamos?</h1>
            <RenderMap/>
            <h1 className="map__title">¡Ven a visitarnos!</h1>
</div>
    );
}


export default function Map() {
    return (
        <MyMap/>

    );
}

