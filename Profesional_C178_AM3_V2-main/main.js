let latitude=35.41, longitude=139.46;


mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom:14
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAcurracy: true
        },
        trackUserLocation:true
    })
);







map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accesToken
    }),
    'top-left'
);

var img = document.querySelector("#mrkr")

var marker1 = new mapboxgl.Marker({
    element : img
})

.setLngLat([31.12,29.59])
.addTo(map);