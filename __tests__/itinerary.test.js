const Itinerary = require('../src/cruise');
const Port = require('../src/cruise');

describe('Itinerary', () => {
    it('can be instantiated', () => {
     expect(new Itinerary()).toBeInstanceOf(Object);
    });
  });

  describe('Itinerary properties', () => {
    xit('tests that I can create a new Itinerary with a ports property', () => {
        const portPorto = new Port ('Porto') 
        const portLisbon = new Port ('Lisbon')
        const list1 = new Itinerary (portLisbon, portPorto)
  
      expect(list1).toBe([{name: 'Lisbon'}, {name: 'Porto'}]);
      
    });
  });