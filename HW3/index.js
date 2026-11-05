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

let startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
  console.log("Started!");
  race();
});

function race() {
  let intervalLapTime = 5000;

  initDrivers();

  // Update Progress Bar
  let intervalStart = Date.now();
  let fill = document.getElementById("progressFill");
  let progressBar = setInterval(() => {
    let elapsed = Date.now() - intervalStart;
    let progress = (elapsed / intervalLapTime) * 100;

    fill.style.width = `${progress}%`;

    if (progress == 100) {
      progress = 0;
    }

    if (lap > 10) {
      clearInterval(progressBar);
      fill.style.width = `0%`;
    }
  }, 100);

  let lap = 1;
  let loop = setInterval(() => {
    intervalStart = Date.now();

    updateDriversData();
    render();

    // Update Lap Count
    let lapCount = document.getElementById("lapCurrent");
    lapCount.innerText = lap;
    lap++;

    if (lap > mockData.race.totalLaps) {
      clearInterval(loop);

      let winner = document.querySelector(
        "#standingsBody tr:first-child .driver",
      );
      console.log("Winner: " + winner.textContent);
    }
  }, intervalLapTime);
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

function render() {
  let drivers = mockData.race.drivers;

  // Sort drivers by total lap time
  drivers.sort((a, b) => {
    let totalA = a.lapTimes.reduce((sum, lap) => sum + lap, 0);
    let totalB = b.lapTimes.reduce((sum, lap) => sum + lap, 0);

    return totalA - totalB;
  });

  const tbody = document.getElementById("standingsBody");
  tbody.innerHTML = "";

  drivers.forEach((driver, index) => {
    let totalTime = 0;
    driver.lapTimes.forEach((lap) => {
      totalTime += lap;
    });

    tbody.insertAdjacentHTML(
      "beforeend",
      `
        <tr>
          <td class="col-pos">${index + 1}</td>
          <td class="driver">${driver.name}</td>
          <td>${driver.team}</td>
          <td class="num">${driver.baseSpeed}</td>
          <td class="num">${driver.baseSkill}</td>
          <td><span class="tyre tyre-${driver.currentTireType.toLocaleLowerCase()}">${driver.currentTireType}</span></td>
          <td class="num">0</td>
          <td class="num">${driver.lapTimes[driver.lapTimes.length - 1].toFixed(2)}</td>
          <td class="num">${totalTime.toFixed(2)}</td>
          <td><span class="status status-ok">Grid</span></td>
        </tr>
      `,
    );
  });
}
