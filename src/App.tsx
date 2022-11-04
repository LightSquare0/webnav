import { useEffect, useRef, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibGlnaHRzcXVhcmUiLCJhIjoiY2w5d3FmeG8xMDA5ODN3cXc3cHRnb3R0YSJ9.4DHGDTGaKLOjDhBemnBXQQ';

function App() {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      //@ts-ignore
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    console.log(map.current)
  });

  return (
    <>
    <div ref={mapContainer} style={{width: "100vw", height: "100vh"}} />
    <div>samper</div>
    </>
  )
}

export default App
