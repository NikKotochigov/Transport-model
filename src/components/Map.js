import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';
import Leaflet from "leaflet";
import routingMachine from '../utils/routingMachine';

function Map() {

    const [routingControl, SetRoutingControl] = useState(null);
    const selectedProposal = useSelector(state => state.proposals.selectedProposal);
    const map = useMap();

    useEffect(() => {
        if (selectedProposal.startPoint?.coordinates && selectedProposal.endPoint?.coordinates) {
            
            if (routingControl) {
                map.removeControl(routingControl);
            }
            
            const points = [Leaflet.latLng(selectedProposal.startPoint.coordinates[0], selectedProposal.startPoint.coordinates[1]),
            Leaflet.latLng(selectedProposal.endPoint.coordinates[0], selectedProposal.endPoint.coordinates[1])];
            const routingOptions = {
                addWaypoints: false,
                routeWhileDragging: false,
                show: false,
                fitSelectedRoutes: false,
                collapsible: true
            }         
            const NewRoutingControl = routingMachine(points, routingOptions); 
            SetRoutingControl(NewRoutingControl);         
            NewRoutingControl.addTo(map);
        }
    }, [selectedProposal, map])

    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

}

export default Map;