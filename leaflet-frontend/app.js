var map = L.map('map').setView([0, 0], 1);
        mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=AmzwTmJOo3SPEWU52EEz', {
            attribution: 'Map data; ' + mapLink,
            maxZoom: 20,
            minZoom: 1.5,
            }).addTo(map);
            var cannabisLeaf = L.icon({
              iconUrl: 'https://pluspng.com/img-png/weed-png-hd-weed-20symbol-20png-2000.png',
              iconSize: [38, 69],
              iconAnchor: [22, 69]
            })
  

  fetch('http://localhost:3000/locations')
    .then(response => response.json())
    .then(locations => displayContent(locations))


function displayContent(locations) {
 console.log(locations)
 locations.forEach(location => {
   const marker = new L.marker([location.lat, location.long], {icon: cannabisLeaf}).bindPopup(`Strain: ${location.name} <br> ${location.lat} `).addTo(map);
   marker.on('click', function(){
    marker._popup.setContent(`Strain: ${location.name}<br> 
                              Location: ${location.location}<br> 
                              Elevation: ${location.elevation} <br> 
                              Climate: ${location.climate} <br> 
                              Coordinates: ${location.lat}, ${location.long}<br>
                              Seeds: ${location.seeds}`)
   });
 })
}

  

