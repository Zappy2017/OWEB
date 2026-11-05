// The mock data is here to provide general data structure parameters like pit stops and incidents will be calculated randomly
let mockData = {
  race: {
    totalLaps: 10,
    drivers: [
      {
        id: 1,
        name: "Max Verstappen",
        team: "Red Bull",
        baseSpeed: 95,
        baseSkill: 98,
        currentTireType: "soft",
        pitStops: [
          {
            // lap: 5,
            // tireChange: {
            //   from: "soft",
            //   to: "medium",
            // },
            // durationSeconds: 3.2,
          },
        ],
        incidents: [
          {
            // lap: 7,
            // type: "spin",
            // timePenaltySeconds: 4.5,
          },
        ],
      },
      {
        id: 2,
        name: "Lewis Hamilton",
        team: "Mercedes",
        baseSpeed: 93,
        baseSkill: 97,
        currentTireType: "medium",
        pitStops: [],
        incidents: [],
      },
      {
        id: 3,
        name: "Charles Leclerc",
        team: "Ferrari",
        baseSpeed: 96,
        baseSkill: 94,
        currentTireType: "soft",
        pitStops: [{}],
        incidents: [{}],
      },
      {
        id: 4,
        name: "Lando Norris",
        team: "McLaren",
        baseSpeed: 94,
        baseSkill: 95,
        currentTireType: "medium",
        pitStops: [{}],
        incidents: [{}],
      },
    ],
  },
};

document.addEventListener("DOMContentLoaded", race);

function race() {
  initDrivers();

  console.log(mockData);
}

// Initiates driver data for starting conditions for pit stops and incidents
function initDrivers() {
  let drivers = mockData.race.drivers;

  drivers.forEach((driver) => {
    // Initialise Pit Stops Data
    let pitStopLap = Math.floor(Math.random() * 10);
    let minPenalty = 20;
    let maxPenalty = 24;
    let pitStopTimePenaltySeconds =
      maxPenalty -
      (driver.baseSkill / 100) * (maxPenalty - minPenalty) +
      (Math.random() * 2 - 1);

    driver.pitStops.lap = pitStopLap;
    driver.pitStops.durationSeconds = pitStopTimePenaltySeconds;

    // Initialise Incidents Data
    let incidentProbability = 0.2 - (driver.baseSkill / 100) * 0.15;
    if (Math.random() < incidentProbability) {
      let incidentLap = Math.floor(Math.random() * 10);
      let minIncidentPenalty = 5;
      let maxIncidentPenalty = 15;
      let incidentTimePenaltySeconds =
        maxIncidentPenalty -
        (driver.baseSkill / 100) * (maxIncidentPenalty - minIncidentPenalty) +
        (Math.random() * 4 - 2);

      driver.incidents.lap = incidentLap;
      driver.incidents.timePenaltySeconds = incidentTimePenaltySeconds;
    }

    // Initialise Tyre Data
    let startingTyreProbability = Math.floor(Math.random() + 1);
    if (startingTyreProbability) {
      driver.currentTireType = "soft";
    } else {
      driver.currentTireType = "hard";
    }
  });
}

// Calculates effective speed for each driver taking into account their stats and random ranges
function getDriversData() {
  let drivers = mockData.drivers;

  drivers.forEach((driver) => {});
}
