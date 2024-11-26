import React from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Coordinates } from '../types';

interface MapSelectorProps {
  onLocationSelect: (coords: Coordinates) => void;
  selectedLocation: Coordinates | null;
  disabled: boolean;
}

function LocationMarker({ position, onLocationSelect }: { 
  position: Coordinates | null;
  onLocationSelect: (coords: Coordinates) => void;
}) {
  useMapEvents({
    click(e) {
      onLocationSelect({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });

  return position ? <Marker position={position} /> : null;
}

export const MapSelector: React.FC<MapSelectorProps> = ({
  onLocationSelect,
  selectedLocation,
  disabled
}) => {
  return (
    <div className={`w-full h-48 sm:h-64 md:h-[400px] rounded-lg overflow-hidden ${disabled ? 'pointer-events-none opacity-50' : ''}`}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker position={selectedLocation} onLocationSelect={onLocationSelect} />
      </MapContainer>
    </div>
  );
};