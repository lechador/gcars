'use client'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet';

export default function LeafletMap() {
    const position = [41.79689026292022, 44.77011215354279]
    const customIcon = L.icon({
        iconUrl: '/marker.png',
        iconSize: [50, 50]
      });
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='w-full h-96'>
            <TileLayer
            attribution=''
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                position && (
                    <Marker position={position} icon={customIcon}>
                        <Popup>
                            დავით აღმაშენებლის ხეივანი 122
                        </Popup>
                    </Marker>
                )
            }
        </MapContainer>
  )
}