export default {
  name: 'Luke Skywalker',
  height: 172,
  mass: 77,
  birthYear: '19BBY',
  homeworld: {
    name: 'Tatooine',
    rotationPeriod: 23,
    orbitalPeriod: 304,
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    population: 200000
  },
  vehicles: [
    {
      name: 'X-wing',
      model: 'T-65 X-wing',
      vehicleClass: 'starship', // Starfighter
      costInCredits: 150000,
      specs: {
        lengthInMetres: 12.5,
        crew: 1,
        passengers: 0
      },
    },
    {
      name: 'Imperial shuttle',
      model: 'Lambda-class T-4a shuttle',
      vehicleClass: 'starship', // Armed government transport
      costInCredits: 240000,
      specs: {
        lengthInMetres: 20,
        crew: 6,
        passengers: 20
      },
    },
    {
      name: "Landspeeder",
      model: "X-34 landspeeder",
      vehicleClass: "speeder",    // landspeeder
      costInCredits: 10550,     
      specs: {
        lengthInMetres: 3.4,
        crew: 1,
        passengers: 1
      }
    },
    {
      name: "Airspeeder",
      model: "t-47 airspeeder",
      vehicleClass: "speeder",    // airspeeder
      costInCredits: 10000,       // made up data
      specs: {
        lengthInMetres: 4.5,
        crew: 2,
        passengers: 0
      }
    },
    {
      name: "Imperial Speeder Bike",
      model: "74-Z speeder bike",
      vehicleClass: "speeder",
      costInCredits: 8000,
      specs: {
        lengthInMetres: 3,
        crew: 1,
        passengers: 1
      }
    }
  ]
}