// MapSection.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure you import Leaflet's CSS

const MapSection = ({ position }) => (
    <div className="h-64 bg-gray-800 rounded-lg">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full rounded-lg">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>Expresso Carwash Pty Ltd</Popup>
            </Marker>
        </MapContainer>
    </div>
);

export default MapSection;
