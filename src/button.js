const portInput = document.querySelector('#portinput');
const addPort = document.querySelector('#addportbutton');
const portList = document.querySelector('#port-list')
const confirmItinerary = document.querySelector('#confirm-itinerary-button')

addPort.addEventListener('click', function() {
    if (portInput.value.length > 0) {
    const port = new Port (portInput.value);
    console.log(port);
    itinerary.ports.push(port);

    const newPort = document.createElement('li');
    portList.appendChild(newPort);
    newPort.innerText = port.name;
    portInput.value = ''
    }
});

confirmItinerary.addEventListener('click', function() {
  ship = new Ship('Boaty McBoatFace', itinerary)
  controller = new Controller (ship);

  controller.renderPorts(itinerary.ports);
  controller.renderShip();
    
});