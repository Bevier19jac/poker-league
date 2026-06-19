/**
 * TOD'S POKER LEAGUE - Data File
 * Season 20 | Peachtree City, GA
 */

const LEAGUE = {
  name: "Tod's Poker League",
  season: 20,
  host: "Tod Ellison",
  location: "Peachtree City, GA",

  schedule: [
    { date: "2026-02-19", label: "Event 1",               type: "regular",    completed: true  },
    { date: "2026-03-05", label: "Event 2",               type: "regular",    completed: true  },
    { date: "2026-03-19", label: "Event 3",               type: "regular",    completed: true  },
    { date: "2026-04-02", label: "Event 4",               type: "regular",    completed: true  },
    { date: "2026-04-16", label: "Event 5",               type: "regular",    completed: true  },
    { date: "2026-04-30", label: "Event 6",               type: "regular",    completed: true  },
    { date: "2026-05-14", label: "Event 7",               type: "regular",    completed: true  },
    { date: "2026-05-19", label: "Event 8",               type: "regular",    completed: true  },
    { date: "2026-06-04", label: "Event 9",               type: "regular",    completed: true  },
    { date: "2026-06-18", label: "Event 10",              type: "regular",    completed: true  },
    { date: "2026-07-02", label: "Event 11",              type: "regular",    completed: false },
    { date: "2026-07-16", label: "Event 12",              type: "regular",    completed: false },
    { date: "2026-07-25", label: "Mid-Season Tournament", type: "tournament", completed: false },
    { date: "2026-08-11", label: "Event 13",              type: "regular",    completed: false },
    { date: "2026-08-25", label: "Event 14",              type: "regular",    completed: false },
    { date: "2026-09-01", label: "Season Final",          type: "final",      completed: false, note: "Date TBD" },
  ],

  lastGame: {
    date: "2026-06-18",
    label: "Event 10",
    playerCount: 15,
    kitty: 220,
    winner: "Karey",
    recap: "Karey and Chris F chopped the pot, with Karey winning the deciding hand to claim 1st. Sal finished a strong 3rd. 15 players, $220 kitty. Next up: July 2nd.",
    results: [
      { place: 1,  name: "Karey",   points: 5000, itm: true,  winnings: 300 },
      { place: 2,  name: "Chris F", points: 5000, itm: true,  winnings: 300 },
      { place: 3,  name: "Sal",     points: 4100, itm: true,  winnings: 100 },
      { place: 4,  name: "Chris P", points: 3700, itm: true,  winnings: 80  },
      { place: 5,  name: "Matt",    points: 3300, itm: false, winnings: 0   },
      { place: 6,  name: "Guy",     points: 3000, itm: false, winnings: 0   },
      { place: 7,  name: "Charlie", points: 2700, itm: false, winnings: 0   },
      { place: 8,  name: "Jacob",   points: 2400, itm: false, winnings: 0   },
      { place: 9,  name: "Steve",   points: 2100, itm: false, winnings: 0   },
      { place: 10, name: "Eric",    points: 1800, itm: false, winnings: 0   },
      { place: 11, name: "Tod",     points: 1500, itm: false, winnings: 0   },
      { place: 12, name: "Philo",   points: 1200, itm: false, winnings: 40  },
      { place: 13, name: "Steele",  points:  900, itm: false, winnings: 0   },
      { place: 14, name: "Nate",    points:  600, itm: false, winnings: 0   },
      { place: 15, name: "Toner",   points:  300, itm: false, winnings: 0   },
    ],
    cashGame: { winner: "", note: "" },
    highHand: { player: "Philo", hand: "", description: "Philo took the $40 side pot." },
  },

  // TOP 10 ORDER confirmed by player through Event 10.
  // Tod total (41,400) confirmed. All other point values ESTIMATED.
  standings: [
    { name: "Tod",     fullName: "Tod Ellison",        events: 10, points: 41400, wins: 0, cashes: 6, avgPlace: 5.8  },
    { name: "Guy",     fullName: "Guy Caldwell",       events: 8,  points: 39100, wins: 1, cashes: 5, avgPlace: 5.4  },
    { name: "Vince",   fullName: "Vince Ottone",       events: 9,  points: 37200, wins: 1, cashes: 4, avgPlace: 6.1  },
    { name: "Karey",   fullName: "Karey Koscevic",     events: 10, points: 35800, wins: 1, cashes: 4, avgPlace: 6.9  },
    { name: "JH",      fullName: "JH Hooper",          events: 9,  points: 34400, wins: 0, cashes: 4, avgPlace: 7.3  },
    { name: "Chris F", fullName: "Chris Frady",        events: 10, points: 33100, wins: 0, cashes: 3, avgPlace: 7.7  },
    { name: "Steve",   fullName: "Steve Mills",        events: 9,  points: 31700, wins: 1, cashes: 4, avgPlace: 8.0  },
    { name: "Jacob",   fullName: "Jacob Bevier",       events: 9,  points: 30200, wins: 0, cashes: 3, avgPlace: 8.6  },
    { name: "Michael", fullName: "Michael Loridas",    events: 8,  points: 28600, wins: 0, cashes: 2, avgPlace: 9.2  },
    { name: "Jay",     fullName: "Jay Rose",           events: 8,  points: 26900, wins: 1, cashes: 2, avgPlace: 9.8  },
    { name: "Chris P", fullName: "Chris Pettis",       events: 10, points: 25200, wins: 1, cashes: 3, avgPlace: 10.1 },
    { name: "Toner",   fullName: "Tim Toner",          events: 9,  points: 23800, wins: 0, cashes: 2, avgPlace: 10.6 },
    { name: "Jeremy",  fullName: "Jeremy Bollinger",   events: 8,  points: 22300, wins: 0, cashes: 2, avgPlace: 11.0 },
    { name: "Nate",    fullName: "Nate Woods",         events: 8,  points: 20900, wins: 0, cashes: 2, avgPlace: 11.4 },
    { name: "Philo",   fullName: "Philo Mitman",       events: 7,  points: 19500, wins: 0, cashes: 2, avgPlace: 10.8 },
    { name: "Charlie", fullName: "Charlie Grant",      events: 9,  points: 18200, wins: 0, cashes: 1, avgPlace: 11.9 },
    { name: "Eric C",  fullName: "Eric Cunningham",    events: 8,  points: 16800, wins: 0, cashes: 1, avgPlace: 12.2 },
    { name: "Steele",  fullName: "Steele Persons",     events: 7,  points: 15400, wins: 0, cashes: 1, avgPlace: 11.7 },
    { name: "Sal",     fullName: "Chris Salaski",      events: 5,  points: 13900, wins: 0, cashes: 1, avgPlace: 12.0 },
    { name: "Phil",    fullName: "Phil Tricky",        events: 6,  points: 12500, wins: 0, cashes: 1, avgPlace: 12.8 },
    { name: "Brian",   fullName: "Brian Reilly",       events: 8,  points: 11200, wins: 0, cashes: 0, avgPlace: 13.5 },
    { name: "Tom",     fullName: "Tom Kane",           events: 6,  points: 10100, wins: 0, cashes: 1, avgPlace: 13.1 },
    { name: "Ryan",    fullName: "Ryan Zondervan",     events: 7,  points:  9200, wins: 0, cashes: 0, avgPlace: 13.8 },
    { name: "Matt",    fullName: "Matt Therriault",    events: 5,  points:  8100, wins: 0, cashes: 0, avgPlace: 14.2 },
    { name: "Jake",    fullName: "Jake Westfall",      events: 5,  points:  7200, wins: 0, cashes: 0, avgPlace: 13.6 },
    { name: "Frank",   fullName: "Frank Butler",       events: 5,  points:  6400, wins: 0, cashes: 0, avgPlace: 14.8 },
    { name: "Jason",   fullName: "Jason Oliver",       events: 4,  points:  5600, wins: 0, cashes: 0, avgPlace: 15.4 },
    { name: "Dan",     fullName: "Dan Field",          events: 3,  points:  4800, wins: 0, cashes: 0, avgPlace: 16.2 },
    { name: "Tim F",   fullName: "Tim Fuller",         events: 3,  points:  4200, wins: 0, cashes: 0, avgPlace: 16.0 },
    { name: "Darin",   fullName: "Darin Brewer",       events: 3,  points:  3700, wins: 0, cashes: 0, avgPlace: 16.5 },
    { name: "Jeff",    fullName: "Jeff Mennicke",      events: 3,  points:  3300, wins: 0, cashes: 0, avgPlace: 16.9 },
    { name: "Justin",  fullName: "Justin Harmond",     events: 2,  points:  2800, wins: 0, cashes: 0, avgPlace: 17.5 },
    { name: "Eli",     fullName: "Eli Robbins",        events: 2,  points:  2400, wins: 0, cashes: 0, avgPlace: 18.0 },
    { name: "Gerry",   fullName: "Gerry Rhodes",       events: 1,  points:  1800, wins: 0, cashes: 0, avgPlace: 19.0 },
    { name: "Derek",   fullName: "Derek Eckman",       events: 1,  points:  1500, wins: 0, cashes: 0, avgPlace: 20.0 },
    { name: "Eric K",  fullName: "Eric Kittay",        events: 1,  points:  1200, wins: 0, cashes: 0, avgPlace: 21.0 },
    { name: "Jake B",  fullName: "Jake Butler",        events: 1,  points:   900, wins: 0, cashes: 0, avgPlace: 22.0 },
  ],

  records: {
    highHandAllTime: { player: "Tod Ellison", hand: "Quad Kings - Ace Kicker", season: 20, date: "" },
    highHandSeason:  { player: "Tod Ellison", hand: "Quad Kings - Ace Kicker", season: 20, date: "" },
    mostWins:        { player: "Tod Ellison", count: 15, note: "Career wins all-time" },
    mostSeasons:     { player: "Tod Ellison", count: 20, note: "All 20 seasons" },
  },

  champions: [
    { season: 19, year: 2025, champion: "Charlie Grant", note: "Season 19 Champion" },
    { season: 18, year: 2024, champion: "- unknown -",   note: "" },
    { season: 17, year: 2024, champion: "- unknown -",   note: "" },
  ],

  history: [],

  nextGame: {
    date: "2026-07-02",
    time: "8:00 PM",
    note: "",
    rsvp: {
      in:  [],
      out: [],
    }
  },
};
