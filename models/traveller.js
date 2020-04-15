const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let journeysList = this.journeys.map( journey => journey.startLocation);
  return journeysList;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let journeysList = this.journeys.map( journey => journey.endLocation);
  return journeysList;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let filteredJourneys = this.journeys.filter( journey => journey.transport === transport);
  return filteredJourneys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let filteredJourneys = this.journeys.filter ( journey => journey.distance >= minDistance);
  return filteredJourneys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce( (total, journey) => {
    return total + journey.distance;
  }, 0);
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let transport = this.journeys.map( journey => journey.transport);
  return Array.from(new Set(transport))
};


module.exports = Traveller;
