"use client";

import { useState, useEffect, useRef } from "react";

interface MapProps {
  apiKey: string;
  locationName: string;
  height?:string
}

const GoogleMapLocation: React.FC<MapProps> = ({ apiKey, locationName,height='10rem' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  let googleMapsScriptAdded = false;


  useEffect(() => {
    // Check if the script is already loaded
    if (window.google?.maps) {
      setIsLoaded(true);
      return;
    }
    if (googleMapsScriptAdded) return;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    googleMapsScriptAdded = true;
    
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.setAttribute("data-google-maps-api", "true");
    script.onload = () => {
      setIsLoaded(true);
    };
    script.onerror = () => {
      setError("Failed to load Google Maps API");
      setIsLoading(false);
    };
    document.head.appendChild(script);

    return () => {
      // Clean up only if component unmounts before loading completes
      if (!window.google?.maps) {
        document.head.removeChild(script);
      }
    };
  }, [apiKey]);

  // Geocode the location name and initialize map
  useEffect(() => {
    if (!isLoaded || !mapRef.current || !locationName) return;

    setIsLoading(true);
    
    // Create a geocoder instance
    const geocoder = new google.maps.Geocoder();
    
    // Geocode the location name
    geocoder.geocode({ address: locationName }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
        const position = results[0].geometry.location;
        
        // Create the map
        const map = new google.maps.Map(mapRef.current!, {
          center: position,
          zoom: 12, // Zoom level for city/location
          mapTypeControl: false,
          streetViewControl: true,
          fullscreenControl: true,
          zoomControl: true,
        });
        
        // Add a marker at the geocoded location
        const marker = new google.maps.Marker({
          position,
          map,
          title: locationName,
          animation: google.maps.Animation.DROP,
        });
        
        // Create info window
        const infoContent = `
          <div class="p-2">
            <h3 class="font-bold">${locationName}</h3>
            <p class="text-sm text-gray-600">${results[0].formatted_address}</p>
          </div>
        `;
        
        const infoWindow = new google.maps.InfoWindow({
          content: infoContent,
        });
        
        // Open info window when marker is clicked
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
        
        // Optionally open the info window by default
        // infoWindow.open(map, marker);
        
        setIsLoading(false);
      } else {
        console.error("Geocode failed:", status);
        setError(`Could not find location "${locationName}"`);
        setIsLoading(false);
      }
    });
  }, [isLoaded, locationName]);

  return (
    <div className="w-full rounded-lg shadow-md overflow-hidden" style={{ height }}>
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-gray-500">Loading map...</div>
        </div>
      )}
      
      {error && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="text-red-500">{error}</div>
        </div>
      )}
      
      <div ref={mapRef} className="w-full h-full" />
    </div>
    );
};

export default GoogleMapLocation;
