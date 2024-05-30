




let branches = [];
branches.push(new Branch('Mikocheni B',[-6.7500168405304395, 39.24161933667397],'Mwai Kibaki Road','https://maps.app.goo.gl/28n8jNNZcfpdVNSDA'));
branches.push(new Branch('Kinondoni',[-6.75324587783343, 39.2241220102132],'Kinondoni Street','https://maps.app.goo.gl/uT2dvDc4EwE9h1Zh8'));
createLocationItem(branches);
var map = L.map('map').setView(branches[0].coords, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = null;
addMarker(branches[0].coords,marker,map);



function addMarker(coordinates, marker,map){
    
    if(marker){
        map.removeLayer(marker);
    }
    // const customIcon = L.icon({
    //     iconUrl: '../images/icons/location-icon-map.svg', // Replace with the path to your icon
    //     iconSize: [250, 250], // Specify the size of the icon (width, height)
    //     iconAnchor: [125, 125], // Point of the icon which will correspond to marker's location
    //     popupAnchor: [0, -250]
    //      // Point from which the popup should open relative to the iconAnchor
    // });
    for(let i=0;i<branches.length;i++){
        marker = L.marker(branches[i].coords);
        L.circle(branches[i].coords,500).addTo(map);
        marker.addTo(map);
    
    }
    
}


function setCurrentLocation(map,index,branches){
    map.setView(branches[index].coords,13);

}



function createLocationItem(branches){
    for(let b =0;b<branches.length;b++){
        const LOCATION_CONTAINER = document.createElement('div');
        const LOCATION_NAME = document.createElement('h3');
        const LOCATION_ADDRESS = document.createElement('p');
        const DirectionsButton = document.createElement('a');
    
        const LOCATION_LIST = document.getElementsByClassName('list-of-locations');
    
        LOCATION_CONTAINER.classList.add('location-item');
        LOCATION_NAME.textContent = branches[b].name
        LOCATION_ADDRESS.textContent = branches[b].address;
        DirectionsButton.setAttribute('href',branches[b].url);
        LOCATION_CONTAINER.appendChild(LOCATION_NAME);
        LOCATION_CONTAINER.appendChild(LOCATION_ADDRESS);
        LOCATION_CONTAINER.appendChild(DirectionsButton);
    
        LOCATION_LIST[0].appendChild(LOCATION_CONTAINER);
        
        LOCATION_CONTAINER.addEventListener('click',function(){ setCurrentLocation(map,b,branches)});
        
    }    
    
    
}    

function Branch(name,coords,address, url){
    this.name = name;
    this.coords = coords;
    this.address = address;
    this.show = false;
    this.url = url;
}    


