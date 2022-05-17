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

portInput.addEventListener('keypress', function(event) {
    if (portInput.value.length > 0 && event.keyCode === 13) {
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
    if (itinerary.ports.length < 3) {
        return alert('The itinerary must contain at least 3 ports')
    } else {
  ship = new Ship('Boaty McBoatFace', itinerary)
  controller = new Controller (ship);

  controller.renderPorts(itinerary.ports);
  controller.renderShip();
    }
    
});