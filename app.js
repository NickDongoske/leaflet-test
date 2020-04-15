var map = L.map('map').setView([0, 0], 1);
        mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=AmzwTmJOo3SPEWU52EEz', {
            attribution: 'Map data &copy; ' + mapLink,
            maxZoom: 18,
            minZoom: 3,
            }).addTo(map);
            var cannabisLeaf = L.icon({
              iconUrl: 'https://pluspng.com/img-png/weed-png-hd-weed-20symbol-20png-2000.png',
              iconSize: [38, 69],
              iconAnchor: [22, 69]
            })
            var rastaLeaf = L.icon({
              iconUrl: 'https://clipartmag.com/images/cannabis-clipart-35.jpg',
              iconSize: [38, 69],
              iconAnchor: [22, 69]

            })

           var locations = [
                         ["London",51.5, -0.09, {icon: cannabisLeaf, title: 'London'}], 
                         ['sinai', 29.987049, 34.268709, {icon: cannabisLeaf, title: 'Sinai'}],          
                         ['Hindu kush', 36.929809, 73.168140, {icon: cannabisLeaf, title: 'Hindu Kush'}],
                         ['Pakistani Chitral Kush', 35.768642, 71.768386, {icon: cannabisLeaf, title: 'Pakistani Chitral Kush'}],
                         ['Durban Poison',-29.903993, 30.941933, {icon: cannabisLeaf, title: 'Durban Poison'}],
                         ['Lambs Bread',18.227144, -77.229209, {icon: rastaLeaf, title: 'Lambs Bread'}],
                         ['Colombian Gold',11.171647, -73.992430, {icon: cannabisLeaf, title: 'Colombian Gold'}],
                         ['Acapulco Gold',16.889946, -99.877963, {icon: cannabisLeaf, title: 'Acapulco Gold'}],
                         ['Panama Red',9.248704, -79.389782, {icon: cannabisLeaf, title: 'Panama Red'}],
                         ['Aceh',3.656435, 97.472311, {icon: cannabisLeaf, title: 'Aceh'}],
                         ['Thai',14.409035, 101.458692, {icon: cannabisLeaf, title: 'Thai'}],
                         ['Malawi',-13.754058, 34.444188, {icon: cannabisLeaf, title: 'Malawi'}],
                         ['Ketama',35.178002, -5.262269, {icon: cannabisLeaf, title: 'Ketama'}],
                         ['Brazil Amazonia',-26.357113, -49.965492, {icon: cannabisLeaf, title: 'Brazil Amazonia'}],
                         ['Malana Cream',32.063101, 77.263783, {icon: cannabisLeaf, title: 'Malana Cream'}],
                         ['Orissa',21.001256, 85.849180, {icon: cannabisLeaf, title: 'Orissa'}]
                         ];
          for (var i = 0; i < locations.length; i++) {
          marker = new L.marker([locations[i][1], locations[i][2]], locations[i][3])
            .bindPopup(locations[i][0])
            .addTo(map);
  }