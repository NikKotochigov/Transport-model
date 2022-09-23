import { MapContainer } from 'react-leaflet';
import Map from './Map';

const center = [59.93072315047371, 30.353757147996525];

function MapForm() {

    return (
        <MapContainer
            center={center}
            zoom={11}
            scrollWheelZoom={true}
            style={{ height: '100vh', width: '100%' }}>
            <Map />
        </MapContainer>);
}

export default MapForm;