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
        pitStops: [],
        incidents: [],
        lapTimes: [],
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
        lapTimes: [],
      },
      {
        id: 3,
        name: "Charles Leclerc",
        team: "Ferrari",
        baseSpeed: 96,
        baseSkill: 94,
        currentTireType: "soft",
        pitStops: [],
        incidents: [],
        lapTimes: [],
      },
      {
        id: 4,
        name: "Lando Norris",
        team: "McLaren",
        baseSpeed: 94,
        baseSkill: 95,
        currentTireType: "medium",
        pitStops: [],
        incidents: [],
        lapTimes: [],
      },
      {
        id: 5,
        name: "Oscar Piastri",
        team: "McLaren",
        baseSpeed: 94,
        baseSkill: 94,
        currentTireType: "hard",
        pitStops: [],
        incidents: [],
        lapTimes: [],
      },
      {
        id: 6,
        name: "George Russell",
        team: "Mercedes",
        baseSpeed: 93,
        baseSkill: 96,
        currentTireType: "soft",
        pitStops: [],
        incidents: [],
        lapTimes: [],
      },
      {
        id: 7,
        name: "Carlos Sainz",
        team: "Williams",
        baseSpeed: 91,
        baseSkill: 93,
        currentTireType: "medium",
        pitStops: [],
        incidents: [],
        lapTimes: [],
      },
      {
        id: 8,
        name: "Fernando Alonso",
        team: "Aston Martin",
        baseSpeed: 90,
        baseSkill: 98,
        currentTireType: "hard",
        pitStops: [],
        incidents: [],
        lapTimes: [],
      },
      {
        id: 9,
        name: "Lance Stroll",
        team: "Aston Martin",
        baseSpeed: 88,
        baseSkill: 85,
        currentTireType: "medium",
        pitStops: [],
        incidents: [],
        lapTimes: [],
      },
      {
        id: 10,
        name: "Pierre Gasly",
        team: "Alpine",
        baseSpeed: 89,
        baseSkill: 91,
        currentTireType: "soft",
        pitStops: [],
        incidents: [],
        lapTimes: [],
      },
    ],
  },
};

document.addEventListener("DOMContentLoaded", race);

function race() {
  initDrivers();

  updateDriversData();
  console.log(mockData);

  // let loop = setInterval(() => {
  //   getDriversData();
  //   console.log(mockData);
  // }, 20000);
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
    let startingTyreProbability = Math.floor(Math.random() * 2);
    if (startingTyreProbability) {
      driver.currentTireType = "soft";
    } else {
      driver.currentTireType = "hard";
    }
  });
}

// Calculates lap time for each driver taking into account their stats and random ranges
function updateDriversData() {
  // Check if race has ended
  if (mockData.race.totalLaps < mockData.race.drivers[0].lapTimes.length) {
    return;
  }

  let drivers = mockData.race.drivers;

  drivers.forEach((driver) => {
    let baseLapTime = 90;

    let lapTime =
      baseLapTime -
      driver.baseSpeed * 0.08 -
      driver.baseSkill * 0.03 +
      (driver.currentTireType === "soft" ? -0.8 : 0.4) +
      (Math.random() * 1.2 - 0.6);

    driver.lapTimes.push(lapTime);
  });
}
