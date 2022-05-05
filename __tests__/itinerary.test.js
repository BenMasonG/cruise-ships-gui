const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Itinerary', () => {
    it('can be instantiated', () => {
     expect(new Itinerary()).toBeInstanceOf(Object);
    });
  });

  describe('Itinerary properties', () => {
    it('tests that I can create a new Itinerary with a ports property', () => {
        const portPorto = new Port ('Porto') 
        const portLisbon = new Port ('Lisbon')
        const list1 = new Itinerary ([portLisbon, portPorto])
  
      expect(list1).toEqual({ports: [portLisbon, portPorto]});
      
    });
  });