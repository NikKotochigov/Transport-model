import Leaflet from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

const routingMachine = (points, options) => {
    const instance = Leaflet.Routing.control({
        waypoints: points,
        ...options
    })
    return instance;
}

export default routingMachine;