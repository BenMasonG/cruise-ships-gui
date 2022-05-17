(function exportController() {
function Controller (ship) {
    this.ship = ship

    this.initialiseSea();

    document.querySelector('#sailbutton').addEventListener('click', () => {
        this.setSail();
    });
};

  Controller.prototype.initialiseSea = function initialiseSea () {
      const backgrounds = [
          './images/water0.png',
          './images/water1.png',
      ];
      let backgroundIndex = 0;
      window.setInterval(() => {
          document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
          backgroundIndex += 1;
      }, 1000);
  };

  Controller.prototype.renderPorts = function renderPorts (ports) {
          const portsElement = document.querySelector('#ports');
          portsElement.style.width = '0px';
          ports.forEach((port, index) => {
              const newPortElement = document.createElement('div');
              newPortElement.className = 'port';

              portsElement.appendChild(newPortElement);
              newPortElement.dataset.portName = port.name;
              newPortElement.dataset.portIndex = index;
              const portsElementWidth = parseInt(portsElement.style.width, 10);
              portsElement.style.width = `${portsElementWidth + 256}px`;
          })
      };

  Controller.prototype.renderShip = function renderShip () {
    const ship = this.ship;
    
    const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const portsElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);

    const shipElement = document.querySelector('#ship');
    shipElement.style.top = `${portsElement.offsetTop + 32}px`;
    shipElement.style.left = `${portsElement.offsetLeft - 32}px`;
  }
    
  Controller.prototype.setSail = function setSail () {
      const ship = this.ship;

      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);

      if (!nextPortElement) {
        const sailButton = document.querySelector('#sailbutton');
        const viewport= document.querySelector('#viewport');
        viewport.removeChild(sailButton)
        return this.renderMessage(`${ship.name} has reached it's final destination`);
    };

    this.renderMessage(`Now departing ${ship.currentPort.name}`);

      const shipElement = document.querySelector('#ship');
      const sailInterval = setInterval(() => {
          const shipLeft = parseInt(shipElement.style.left, 10);
          if (shipLeft === (nextPortElement.offsetLeft - 32)) {
              ship.setSail();
              ship.dock();
              this.renderMessage(`We have arrived at ${ship.currentPort.name}`);
              clearInterval(sailInterval);
          }

          shipElement.style.left = `${shipLeft + 1}px`;
      }, 20)
  };

  Controller.prototype.renderMessage = function renderMessage (message) {
      const messageElement = document.createElement('div');
      messageElement.id = 'message';
      messageElement.innerText = message;
      
      const viewport = document.querySelector('#viewport');
      viewport.appendChild(messageElement);

      setTimeout (() => {
          viewport.removeChild(messageElement);
      }, 2000);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
 } else {
     window.Controller = Controller;
 }
}());