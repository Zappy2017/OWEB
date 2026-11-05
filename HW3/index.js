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
            lap: 5,
            tireChange: {
              from: "soft",
              to: "medium",
            },
            durationSeconds: 3.2,
          },
        ],
        incidents: [
          {
            lap: 7,
            type: "spin",
            timePenaltySeconds: 4.5,
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
        pitStops: [
          {
            lap: 6,
            tireChange: {
              from: "medium",
              to: "hard",
            },
            durationSeconds: 3.5,
          },
        ],
        incidents: [],
      },
      {
        id: 3,
        name: "Charles Leclerc",
        team: "Ferrari",
        baseSpeed: 96,
        baseSkill: 94,
        currentTireType: "soft",
        pitStops: [
          {
            lap: 4,
            tireChange: {
              from: "soft",
              to: "hard",
            },
            durationSeconds: 3.1,
          },
        ],
        incidents: [
          {
            lap: 8,
            type: "offTrack",
            timePenaltySeconds: 6.0,
          },
        ],
      },
      {
        id: 4,
        name: "Lando Norris",
        team: "McLaren",
        baseSpeed: 94,
        baseSkill: 95,
        currentTireType: "medium",
        pitStops: [
          {
            lap: 5,
            tireChange: {
              from: "medium",
              to: "soft",
            },
            durationSeconds: 3.3,
          },
        ],
        incidents: [
          {
            lap: 3,
            type: "spin",
            timePenaltySeconds: 3.8,
          },
        ],
      },
    ],
  },
};
