/**
 * TOD'S POKER LEAGUE — Data File
 * Season 20 | Peachtree City, GA
 *
 * HOW TO UPDATE:
 * 1. Edit this file after each game
 * 2. Commit & push to GitHub
 * 3. Site updates automatically
 *
 * Admin password is set in admin.html (ADMIN_PASSWORD constant)
 */

const LEAGUE = {
  name: "Tod's Poker League",
  season: 20,
  host: "Tod Ellison",
  location: "Peachtree City, GA",

  // ─── SCORING FORMULA ─────────────────────────────────────────────────
  // Points = (N_players - Place + 1) * 300  +  ITM Bonus
  // ITM Bonus: 1st=+800, 2nd=+400, 3rd=+300, 4th=+200, 5th=+100
  // ─────────────────────────────────────────────────────────────────────

  // ─── SCHEDULE ────────────────────────────────────────────────────────
  schedule: [
    { date: "2026-02-19", label: "Event 1",              type: "regular",    completed: true  },
    { date: "2026-03-05", label: "Event 2",              type: "regular",    completed: true  },
    { date: "2026-03-19", label: "Event 3",              type: "regular",    completed: true  },
    { date: "2026-04-02", label: "Event 4",              type: "regular",    completed: true  },
    { date: "2026-04-16", label: "Event 5",              type: "regular",    completed: true  },
    { date: "2026-04-30", label: "Event 6",              type: "regular",    completed: true  },
    { date: "2026-05-14", label: "Event 7",              type: "regular",    completed: true  },
    { date: "2026-05-19", label: "Event 8",              type: "regular",    completed: true  },
    { date: "2026-06-04", label: "Event 9",              type: "regular",    completed: true  },
    { date: "2026-06-18", label: "Event 10",             type: "regular",    completed: true  },
    { date: "2026-07-02", label: "Event 11",             type: "regular",    completed: false },
    { date: "2026-07-16", label: "Event 12",             type: "regular",    completed: false },
    { date: "2026-07-25", label: "Mid-Season Tournament",type: "tournament", completed: false },
    { date: "2026-08-11", label: "Event 13",             type: "regular",    completed: false },
    { date: "2026-08-25", label: "Event 14",             type: "regular",    completed: false },
    { date: "2026-09-01", label: "Season Final",         type: "final",      completed: false, note: "Date TBD" },
  ],

  // ─── LAST GAME RESULTS ───────────────────────────────────────────────
  lastGame: {
    date: "2026-06-18",
    label: "Event 10",
    playerCount: 15,
    kitty: 220,
    winner: "Karey",
    recap: "Karey and Chris F chopped the pot, with Karey winning the deciding hand to claim 1st. Sal finished a strong 3rd. 15 players, $220 kitty. Next up: July 2nd.",
    results: [
      { place: 1,  name: "Karey",  points: 5000, itm: true,  winnings: 300 },
      { place: 2,  name: "Chris F",points: 5000, itm: true,  winnings: 300 },
      { place: 3,  name: "Sal",    points: 4100, itm: true,  winnings: 100 },
      { place: 4,  name: "Chris P",points: 3700, itm: true,  winnings: 80  },
      { place: 5,  name: "Matt",   points: 3300, itm: false, winnings: 0   },
      { place: 6,  name: "Guy",    points: 3000, itm: false, winnings: 0   },
      { place: 7,  name: "Charlie",points: 2700, itm: false, winnings: 0   },
      { place: 8,  name: "Jacob",  points: 2400, itm: false, winnings: 0   },
      { place: 9,  name: "Steve",  points: 2100, itm: false, winnings: 0   },
      { place: 10, name: "Eric",   points: 1800, itm: false, winnings: 0   },
      { place: 11, name: "Tod",    points: 1500, itm: false, winnings: 0   },
      { place: 12, name: "Philo",  points: 1200, itm: false, winnings: 40  },
      { place: 13, name: "Steele", points:  900, itm: false, winnings: 0   },
      { place: 14, name: "Nate",   points:  600, itm: false, winnings: 0   },
      { place: 15, name: "Toner",  points:  300, itm: false, winnings: 0   },
    ],
    cashGame: { winner: "", note: "" },
    highHand: { player: "Philo", hand: "", description: "Philo took the $40 side pot." },
  },

  // ─── SEASON 20 STANDINGS ─────────────────────────────────────────────
  // ⚠ ESTIMATED — Update with actual standings from Tod's email image
  standings: [
    { name: "Steve",   fullName: "Steve Mills",       events: 9,  points: 58200, wins: 1, cashes: 5, avgPlace: 5.2  },
    { name: "Tod",     fullName: "Tod Ellison",        events: 10, points: 56800, wins: 0, cashes: 7, avgPlace: 6.1  },
    { name: "Chris P", fullName: "Chris Pettis",       events: 10, points: 54600, wins: 1, cashes: 6, avgPlace: 5.8  },
    { name: "Guy",     fullName: "Guy Caldwell",       events: 7,  points: 48900, wins: 1, cashes: 5, avgPlace: 5.4  },
    { name: "Toner",   fullName: "Tim Toner",          events: 9,  points: 47100, wins: 1, cashes: 4, avgPlace: 6.8  },
    { name: "Karey",   fullName: "Karey Koscevic",     events: 10, points: 44800, wins: 1, cashes: 4, avgPlace: 7.2  },
    { name: "JH",      fullName: "JH Hooper",          events: 9,  points: 43200, wins: 0, cashes: 4, avgPlace: 7.5  },
    { name: "Frady",   fullName: "Chris Frady",        events: 10, points: 42700, wins: 0, cashes: 3, avgPlace: 7.9  },
    { name: "Jeremy",  fullName: "Jeremy Bollinger",   events: 8,  points: 39400, wins: 1, cashes: 3, avgPlace: 8.1  },
    { name: "Nate",    fullName: "Nate Woods",         events: 8,  points: 37900, wins: 1, cashes: 3, avgPlace: 8.6  },
    { name: "Jacob",   fullName: "Jacob Bevier",       events: 9,  points: 36600, wins: 0, cashes: 3, avgPlace: 8.9  },
    { name: "Philo",   fullName: "Philo Mitman",       events: 7,  points: 33800, wins: 0, cashes: 2, avgPlace: 8.4  },
    { name: "Jay",     fullName: "Jay Rose",           events: 8,  points: 31200, wins: 1, cashes: 2, avgPlace: 11.1 },
    { name: "Eric C",  fullName: "Eric Cunningham",    events: 8,  points: 30900, wins: 0, cashes: 2, avgPlace: 10.4 },
    { name: "Charlie", fullName: "Charlie Grant",      events: 9,  points: 29700, wins: 0, cashes: 1, avgPlace: 11.2 },
    { name: "Steele",  fullName: "Steele Persons",     events: 7,  points: 26300, wins: 0, cashes: 1, avgPlace: 10.9 },
    { name: "Vince",   fullName: "Vince Ottone",       events: 9,  points: 24600, wins: 0, cashes: 1, avgPlace: 12.3 },
    { name: "Phil",    fullName: "Phil Tricky",        events: 6,  points: 22800, wins: 0, cashes: 1, avgPlace: 11.5 },
    { name: "Michael", fullName: "Michael Loridas",    events: 8,  points: 21400, wins: 0, cashes: 2, avgPlace: 12.1 },
    { name: "Brian",   fullName: "Brian Reilly",       events: 8,  points: 19700, wins: 0, cashes: 0, avgPlace: 13.5 },
    { name: "Tom",     fullName: "Tom Kane",           events: 6,  points: 18600, wins: 0, cashes: 1, avgPlace: 12.8 },
    { name: "Ryan",    fullName: "Ryan Zondervan",     events: 7,  points: 17900, wins: 0, cashes: 1, avgPlace: 13.2 },
    { name: "Sal",     fullName: "Chris Salaski",      events: 5,  points: 14200, wins: 0, cashes: 0, avgPlace: 14.0 },
    { name: "Jake",    fullName: "Jake Westfall",      events: 5,  points: 13800, wins: 0, cashes: 1, avgPlace: 12.4 },
    { name: "Frank",   fullName: "Frank Butler",       events: 5,  points: 12100, wins: 0, cashes: 0, avgPlace: 14.6 },
    { name: "Jason",   fullName: "Jason Oliver",       events: 4,  points: 10800, wins: 0, cashes: 0, avgPlace: 15.2 },
    { name: "Dan",     fullName: "Dan Field",          events: 3,  points:  8400, wins: 0, cashes: 0, avgPlace: 16.0 },
    { name: "Tim F",   fullName: "Tim Fuller",         events: 3,  points:  7900, wins: 0, cashes: 0, avgPlace: 15.7 },
    { name: "Darin",   fullName: "Darin Brewer",       events: 3,  points:  7400, wins: 0, cashes: 0, avgPlace: 16.3 },
    { name: "Jeff",    fullName: "Jeff Mennicke",      events: 3,  points:  6900, wins: 0, cashes: 0, avgPlace: 16.7 },
    { name: "Justin",  fullName: "Justin Harmond",     events: 2,  points:  5200, wins: 0, cashes: 0, avgPlace: 17.5 },
    { name: "Eli",     fullName: "Eli Robbins",        events: 2,  points:  4800, wins: 0, cashes: 0, avgPlace: 18.0 },
    { name: "Matt",    fullName: "Matt Therriault",    events: 2,  points:  4300, wins: 0, cashes: 0, avgPlace: 18.5 },
    { name: "Gerry",   fullName: "Gerry Rhodes",       events: 1,  points:  2100, wins: 0, cashes: 0, avgPlace: 19.0 },
    { name: "Derek",   fullName: "Derek Eckman",       events: 1,  points:  1800, wins: 0, cashes: 0, avgPlace: 20.0 },
    { name: "Eric K",  fullName: "Eric Kittay",        events: 1,  points:  1500, wins: 0, cashes: 0, avgPlace: 21.0 },
    { name: "Jake B",  fullName: "Jake Butler",        events: 1,  points:  1200, wins: 0, cashes: 0, avgPlace: 22.0 },
    { name: "Jay R",   fullName: "Jay Rose (guest)",   events: 1,  points:   900, wins: 0, cashes: 0, avgPlace: 23.0 },
  ],

  // ─── RECORDS ─────────────────────────────────────────────────────────
  records: {
    highHandAllTime: { player: "Tod Ellison", hand: "Quad Kings — Ace Kicker", season: 20, date: "" },
    highHandSeason:  { player: "Tod Ellison", hand: "Quad Kings — Ace Kicker", season: 20, date: "" },
    mostWins:        { player: "Tod Ellison",  count: 15, note: "Career wins all-time" },
    mostSeasons:     { player: "Tod Ellison",  count: 20, note: "All 20 seasons" },
  },

  // ─── PAST CHAMPIONS ──────────────────────────────────────────────────
  champions: [
    { season: 19, year: 2025, champion: "Charlie Grant", note: "Season 19 Champion" },
    { season: 18, year: 2024, champion: "— unknown —",   note: "" },
    { season: 17, year: 2024, champion: "— unknown —",   note: "" },
    // Add more once you get the board photo
  ],

  // ─── HISTORICAL ARCHIVES ─────────────────────────────────────────────
  // Season 20 results are live above. Add past season data here as you collect it.
  // Format per entry:
  //   { season: N, year: YYYY, events: [{ label, date, playerCount, winner, results: [{place, name, points, itm, winnings}] }] }
  history: [
    // Season 20 is current (live data above) — no entry needed here
    // Example of how to add a past season once you have the data:
    // { season: 19, year: 2025, events: [
    //   { label: "Event 1", date: "2025-02-06", playerCount: 12, winner: "Tod", results: [...] },
    // ]},
  ],

  // ─── NEXT GAME ───────────────────────────────────────────────────────
  nextGame: {
    date: "2026-07-02",
    time: "8:00 PM",
    note: "",
    rsvp: {
      in:  [],   // Add names as replies come in: ["Tod", "Jacob", ...]
      out: [],   // Add names who are out: ["Charlie", ...]
    }
  },
};
