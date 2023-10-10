
export function getHeight (pilot) {
  return pilot.height
}


export function getHomeworldClimate (pilot) {
  // return pilot.homeworld.climate
  // return pilot['homeworld']['climate']
  const homeworldPropertyName = 'climate'
  return pilot.homeworld[homeworldPropertyName]
}

export function getFirstVehicleModel (pilot) {
  return pilot.vehicles[0].model
}

export function getVehicleModelByIndex (pilot, index) {
  return pilot.vehicles[index]?.model
}

export function getSecondVehiclePassengers (pilot) {
  const secondVehicleSpecs = pilot.vehicles[1].specs
  return secondVehicleSpecs.passengers
}

export function getVehicleNames (pilot) {
  // Return an array of vehicle names
  // const vehicles = pilot.vehicles
  // const names = vehicles.map(vehicle => vehicle.name)
  return pilot.vehicles.map(vehicle => vehicle.name)
}

export function getDepreciatedVehicleValues (pilot) {
  // Return an array of objects with the
  // vehicle's name and 90% of the cost:
  // e.g. { name: 'Imperial Shuttle', depreciatedValue: 216000 }
  const depreciatedObjects = pilot.vehicles.map(({name, costInCredits: cost}) => {
    const newObj = {
      name,
      depreciatedValue: cost * .9
    }
    return newObj
  })
  return depreciatedObjects
}

export function getSpeeders (pilot) {
  return pilot.vehicles.filter(vehicle => vehicle.vehicleClass === 'speeder')
}

export function getFirstSpeeder (pilot) {
  return pilot.vehicles.find(vehicle => vehicle.vehicleClass === 'speeder')
}

export function getTotalCrew (pilot) {  
  return pilot.vehicles.reduce((currentTotalCrew, vehicle) => {
    return currentTotalCrew + vehicle.specs.crew
  }, 0)
  // let currentTotalCrew = 0
  // pilot.vehicles.forEach(vehicle => currentTotalCrew += vehicle.specs.crew )
  // return currentTotalCrew
}

export function getHomeworldSpecsList (pilot) {  
  return Object.keys(pilot.homeworld)
}

const dejarik = [                                                                
  [ null, null, 'MS', null, 'GT', null, 'MN', null, null, 'KS', null, 'GH' ],    
  [ null, 'NO', null, null, null, null, null, 'HJ', null, null, 'KL', null ],    
  [ null ] 
]     
// GH = Ghhhk
// MS = Mantellian Savrip        
// GT = Grimtaash the Molator                                                                   // HJ = Houjix
//                                                                                  // NO = Ng'ok
//                                                                                  // KS = Kintan strider
//                                                                                  // KL = K'lor'slug 
//                                                                                  // MN = M'onnok

export function getDejarikValue (row, column) {
  return dejarik[row][column]
}
