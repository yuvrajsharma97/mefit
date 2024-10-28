const Runningexcercise = [
  {
    collection: "running_sprinting",
    name: "Hill Sprints",
    short_description:
      "High-intensity sprints uphill to build power and endurance.",
    image: "https://example.com/hill_sprints.jpg",
    instruction:
      "Find a steep hill, sprint to the top at maximum speed, then walk back down for recovery before repeating.",
  },
  {
    collection: "running_sprinting",
    name: "Flat Sprints",
    short_description:
      "Explosive speed work on flat terrain to increase acceleration and power.",
    image: "https://example.com/flat_sprints.jpg",
    instruction:
      "Sprint at full speed over a short distance, typically 50-100 meters, rest, and repeat.",
  },
  {
    collection: "running_sprinting",
    name: "Interval Sprints",
    short_description:
      "Short bursts of running followed by active rest periods for fat-burning and endurance.",
    image: "https://example.com/interval_sprints.jpg",
    instruction:
      "Sprint for 30 seconds, followed by 30 seconds of light jogging or walking. Repeat for 10-20 minutes.",
  },
  {
    collection: "running_sprinting",
    name: "100-Meter Dash",
    short_description:
      "A short-distance sprint that focuses on explosive power and speed.",
    image: "https://example.com/100m_dash.jpg",
    instruction:
      "Run 100 meters at full speed, rest for a few minutes, then repeat for multiple sets.",
  },
  {
    collection: "running_sprinting",
    name: "Flying Sprints",
    short_description:
      "A speed drill that helps improve top-end running speed.",
    image: "https://example.com/flying_sprints.jpg",
    instruction:
      "Gradually accelerate over 20 meters, then sprint at maximum speed for 30 meters before gradually slowing down.",
  },
  {
    collection: "running_longDistance",
    name: "Long Run",
    short_description:
      "A steady, long-distance run that builds aerobic endurance.",
    image: "https://example.com/long_run.jpg",
    instruction:
      "Run at a comfortable pace for a prolonged period, usually 45 minutes or more, depending on your fitness level.",
  },
  {
    collection: "running_longDistance",
    name: "Tempo Run",
    short_description:
      "A sustained run at a comfortably hard pace to improve endurance.",
    image: "https://example.com/tempo_run.jpg",
    instruction:
      "Run at a pace just below your race pace for 20-40 minutes, followed by a cool-down.",
  },
  {
    collection: "running_longDistance",
    name: "Fartlek Run",
    short_description:
      "A mix of fast and slow running to improve speed and stamina.",
    image: "https://example.com/fartlek_run.jpg",
    instruction:
      "Alternate between fast running and easy jogging, using natural markers like streetlights or trees to vary intensity.",
  },
  {
    collection: "running_longDistance",
    name: "Progression Run",
    short_description:
      "Start slow and gradually increase your pace to finish faster than you started.",
    image: "https://example.com/progression_run.jpg",
    instruction:
      "Begin your run at an easy pace and steadily pick up the speed until you’re running at race pace for the last portion.",
  },
  {
    collection: "running_longDistance",
    name: "Marathon Simulation Run",
    short_description:
      "Long-distance training at marathon pace to prepare for race day.",
    image: "https://example.com/marathon_simulation.jpg",
    instruction:
      "Run 75-80% of marathon distance at your target marathon pace to simulate race conditions.",
  },
  {
    collection: "running_speedWork",
    name: "Track Repeats",
    short_description:
      "High-speed intervals run on a track for improving speed and endurance.",
    image: "https://example.com/track_repeats.jpg",
    instruction:
      "Run a set distance (400m, 800m, or 1,200m) at a fast pace, followed by a period of rest or light jogging.",
  },
  {
    collection: "running_speedWork",
    name: "Strides",
    short_description:
      "Short, fast sprints that help develop speed and running form.",
    image: "https://example.com/strides.jpg",
    instruction:
      "Run 20-30 second sprints at about 90% effort, followed by light jogging or walking for recovery.",
  },
  {
    collection: "running_speedWork",
    name: "Pyramid Intervals",
    short_description:
      "Intervals of increasing and then decreasing distances for speed and endurance.",
    image: "https://example.com/pyramid_intervals.jpg",
    instruction:
      "Run 200m, 400m, 600m, 800m, and back down to 200m with rest in between each interval.",
  },
  {
    collection: "running_speedWork",
    name: "400-Meter Repeats",
    short_description:
      "Short, fast intervals used to improve speed and lactate threshold.",
    image: "https://example.com/400m_repeats.jpg",
    instruction:
      "Run 400 meters at a fast pace, followed by a short recovery period, and repeat for multiple sets.",
  },
  {
    collection: "running_speedWork",
    name: "Wind Sprints",
    short_description:
      "Short sprints that improve speed and anaerobic fitness.",
    image: "https://example.com/wind_sprints.jpg",
    instruction:
      "Sprint for 20-30 seconds into the wind, rest, and repeat for multiple sets.",
  },
  {
    collection: "running_enduranceRunning",
    name: "Half-Marathon Pace Run",
    short_description:
      "A run at your half-marathon pace to improve stamina and endurance.",
    image: "https://example.com/half_marathon_pace.jpg",
    instruction:
      "Run 8-10 miles at your goal half-marathon pace, maintaining a steady effort throughout the run.",
  },
  {
    collection: "running_enduranceRunning",
    name: "Steady-State Run",
    short_description:
      "A prolonged run at a consistent pace to develop endurance.",
    image: "https://example.com/steady_state_run.jpg",
    instruction:
      "Run at a steady, moderate pace for 30-60 minutes, focusing on maintaining a consistent effort.",
  },
  {
    collection: "running_enduranceRunning",
    name: "Easy Run",
    short_description:
      "A slow, recovery-focused run that helps build aerobic endurance.",
    image: "https://example.com/easy_run.jpg",
    instruction:
      "Run at a relaxed pace, keeping your breathing controlled, for 30-60 minutes or longer.",
  },
  {
    collection: "running_enduranceRunning",
    name: "Time Trial",
    short_description:
      "Run a set distance or time at a hard pace to measure fitness improvements.",
    image: "https://example.com/time_trial.jpg",
    instruction:
      "Run at your maximum sustainable pace for a set distance or time (e.g., 5K, 10K), aiming to improve performance.",
  },
  {
    collection: "running_enduranceRunning",
    name: "Ultra Endurance Run",
    short_description:
      "A long-distance run exceeding marathon distance, often on trails.",
    image: "https://example.com/ultra_endurance_run.jpg",
    instruction:
      "Run over long distances, typically beyond 26.2 miles, on various terrains to build extreme endurance.",
  },
  {
    collection: "running_recoveryRuns",
    name: "Easy Recovery Run",
    short_description:
      "A low-intensity run to help recover from harder workouts while maintaining fitness.",
    image: "https://example.com/easy_recovery_run.jpg",
    instruction:
      "Run at a very slow, conversational pace for 20-40 minutes, focusing on form and relaxation.",
  },
  {
    collection: "running_recoveryRuns",
    name: "Shake-Out Run",
    short_description:
      "A short, easy run the day before a race or after a hard workout to loosen muscles.",
    image: "https://example.com/shake_out_run.jpg",
    instruction:
      "Run at a relaxed pace for 10-20 minutes to loosen muscles and promote recovery.",
  },
  {
    collection: "running_recoveryRuns",
    name: "Active Recovery Jog",
    short_description:
      "A slow jog used during interval training or the day after a hard run to promote blood flow.",
    image: "https://example.com/active_recovery_jog.jpg",
    instruction:
      "Jog slowly for 5-10 minutes in between harder intervals or on rest days.",
  },
  {
    collection: "running_recoveryRuns",
    name: "Walk-Run",
    short_description:
      "Alternate between walking and running for active recovery or building up endurance.",
    image: "https://example.com/walk_run.jpg",
    instruction:
      "Run for a set amount of time, then walk for recovery, repeating the pattern to gradually increase endurance.",
  },
  {
    collection: "running_recoveryRuns",
    name: "Post-Race Recovery Run",
    short_description:
      "A very easy run to loosen up after a race and aid in recovery.",
    image: "https://example.com/post_race_recovery_run.jpg",
    instruction:
      "Run at a gentle, relaxed pace for 15-30 minutes after a race to help flush out lactic acid and promote recovery.",
  },
];

export default Runningexcercise;