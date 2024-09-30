import React from 'react'
import PoseCard from '../../../components/posecard';

const Weighttraining = () => {

  const shoulders = [
    {
      shouldersId: 1,
      name: "Overhead Press",
      short_description:
        "A compound exercise targeting the deltoids, triceps, and upper chest.",
      image: "https://example.com/overhead_press.jpg",
      instruction:
        "Stand with feet shoulder-width apart, hold a barbell or dumbbells at shoulder height, and press them overhead until arms are fully extended.",
    },
    {
      shouldersId: 2,
      name: "Arnold Press",
      short_description:
        "A variation of the shoulder press that emphasizes all three deltoid heads.",
      image: "https://example.com/arnold_press.jpg",
      instruction:
        "Sit or stand with dumbbells in front of your shoulders, rotate your palms out as you press the weights overhead.",
    },
    {
      shouldersId: 3,
      name: "Lateral Raise",
      short_description:
        "An isolation exercise for the lateral deltoid to widen the shoulders.",
      image: "https://example.com/lateral_raise.jpg",
      instruction:
        "Stand with a dumbbell in each hand, arms at your sides. Raise your arms out to the sides until they’re parallel to the ground, then lower.",
    },
    {
      shouldersId: 4,
      name: "Front Raise",
      short_description:
        "Targets the anterior deltoid, providing definition to the front of the shoulder.",
      image: "https://example.com/front_raise.jpg",
      instruction:
        "Hold a dumbbell in each hand with palms facing your thighs. Raise one arm in front of you to shoulder height, then lower it back down.",
    },
    {
      shouldersId: 5,
      name: "Reverse Pec Deck Fly",
      short_description: "Focuses on the rear deltoids and upper back muscles.",
      image: "https://example.com/reverse_pec_deck_fly.jpg",
      instruction:
        "Sit at the pec deck machine facing the pads, grab the handles, and open your arms wide to contract the rear deltoids.",
    },
  ];

  const chest = [
    {
      chestId: 1,
      name: "Bench Press",
      short_description:
        "A fundamental chest exercise that also works the shoulders and triceps.",
      image: "https://example.com/bench_press.jpg",
      instruction:
        "Lie flat on a bench, grip the barbell with hands slightly wider than shoulder-width, lower it to your chest, and press it back up.",
    },
    {
      chestId: 2,
      name: "Incline Bench Press",
      short_description:
        "Emphasizes the upper chest muscles and front deltoids.",
      image: "https://example.com/incline_bench_press.jpg",
      instruction:
        "Set the bench at a 30-45 degree angle, grip the barbell, lower it to your upper chest, and press it back up.",
    },
    {
      chestId: 3,
      name: "Chest Fly",
      short_description:
        "An isolation exercise for the chest that also stretches the shoulders.",
      image: "https://example.com/chest_fly.jpg",
      instruction:
        "Lie on a bench, hold dumbbells with palms facing inward, extend your arms outward, then bring them back together above your chest.",
    },
    {
      chestId: 4,
      name: "Cable Crossover",
      short_description:
        "Targets the chest from various angles depending on pulley height.",
      image: "https://example.com/cable_crossover.jpg",
      instruction:
        "Stand between two cable machines, grab the handles, and bring your arms together in front of you, maintaining a slight bend in the elbows.",
    },
    {
      chestId: 5,
      name: "Push-Up",
      short_description:
        "A bodyweight exercise that works the chest, shoulders, and triceps.",
      image: "https://example.com/push_up.jpg",
      instruction:
        "Place your hands on the floor slightly wider than shoulder-width apart. Lower your body to the ground, then push back up.",
    },
  ];

  const back = [
    {
      backId: 1,
      name: "Deadlift",
      short_description:
        "A full-body exercise that emphasizes the posterior chain, including hamstrings, glutes, and lower back.",
      image: "https://example.com/deadlift.jpg",
      instruction:
        "Stand with feet hip-width apart, grip the barbell, keep your back straight, and lift the bar by extending your hips and knees.",
    },
    {
      backId: 2,
      name: "Lat Pulldown",
      short_description:
        "A back exercise that targets the latissimus dorsi muscles.",
      image: "https://example.com/lat_pulldown.jpg",
      instruction:
        "Sit at the lat pulldown machine, grip the bar wider than shoulder-width, pull it down to your chest while keeping your torso upright.",
    },
    {
      backId: 3,
      name: "Pull-Up",
      short_description:
        "A bodyweight exercise that works the back, biceps, and shoulders.",
      image: "https://example.com/pull_up.jpg",
      instruction:
        "Grip a pull-up bar with hands shoulder-width apart, hang with arms fully extended, pull your chest toward the bar, and lower back down.",
    },
    {
      backId: 4,
      name: "Barbell Row",
      short_description:
        "A back exercise that also strengthens the biceps and forearms.",
      image: "https://example.com/barbell_row.jpg",
      instruction:
        "Stand with feet shoulder-width apart, hinge at the hips, grip a barbell, and pull it toward your lower chest while keeping your back straight.",
    },
    {
      backId: 5,
      name: "T-Bar Row",
      short_description:
        "A powerful back exercise that targets the middle and lower traps.",
      image: "https://example.com/t_bar_row.jpg",
      instruction:
        "Stand straddling the T-bar, grab the handles, keep your back straight, and pull the bar toward your chest, squeezing the shoulder blades.",
    },
  ];

  const biceps = [
    {
      bicepsId: 1,
      name: "Dumbbell Bicep Curl",
      short_description: "An isolation exercise that targets the biceps.",
      image: "https://example.com/bicep_curl.jpg",
      instruction:
        "Stand with feet shoulder-width apart, hold a dumbbell in each hand with palms facing forward, and curl the weights up toward your shoulders.",
    },
    {
      bicepsId: 2,
      name: "Barbell Curl",
      short_description:
        "A foundational movement for developing overall bicep mass.",
      image: "https://example.com/barbell_curl.jpg",
      instruction:
        "Stand with feet shoulder-width apart, grip a barbell with palms facing forward, and curl the bar up to shoulder height while keeping your elbows still.",
    },
    {
      bicepsId: 3,
      name: "Hammer Curl",
      short_description:
        "A variation that targets the brachialis muscle of the biceps.",
      image: "https://example.com/hammer_curl.jpg",
      instruction:
        "Hold a dumbbell in each hand with palms facing inward. Curl the weights up to your shoulders while keeping your palms facing each other.",
    },
    {
      bicepsId: 4,
      name: "Concentration Curl",
      short_description: "Isolates the biceps for more focused tension.",
      image: "https://example.com/concentration_curl.jpg",
      instruction:
        "Sit on a bench, brace your elbow on your inner thigh, and curl a dumbbell up to shoulder height, squeezing at the top.",
    },
    {
      bicepsId: 5,
      name: "Preacher Curl",
      short_description:
        "Prevents elbow swing and places focus on the lower portion of the bicep.",
      image: "https://example.com/preacher_curl.jpg",
      instruction:
        "Sit at a preacher bench, grip a barbell or EZ curl bar, and curl the weight up to shoulder height.",
    },
  ];

  const triceps = [
    {
      tricepsId: 1,
      name: "Triceps Dip",
      short_description:
        "A compound movement that targets the triceps and chest.",
      image: "https://example.com/triceps_dip.jpg",
      instruction:
        "Place your hands on parallel bars or a bench behind you, lower your body by bending your elbows, then push back up to the starting position.",
    },
    {
      tricepsId: 2,
      name: "Overhead Tricep Extension",
      short_description:
        "An isolation exercise that stretches and strengthens the triceps.",
      image: "https://example.com/overhead_tricep_extension.jpg",
      instruction:
        "Hold a dumbbell or barbell overhead with both hands. Lower it behind your head, then extend your arms back to the starting position.",
    },
    {
      tricepsId: 3,
      name: "Close-Grip Bench Press",
      short_description:
        "Targets the triceps while also engaging the chest and shoulders.",
      image: "https://example.com/close_grip_bench_press.jpg",
      instruction:
        "Lie flat on a bench with a barbell, grip it with hands close together, lower it to your chest, and press it back up.",
    },
    {
      tricepsId: 4,
      name: "Tricep Kickback",
      short_description:
        "An isolation movement for building tricep strength and definition.",
      image: "https://example.com/tricep_kickback.jpg",
      instruction:
        "Hold a dumbbell in each hand, hinge at the hips, and extend your arms back, squeezing the triceps at the top.",
    },
    {
      tricepsId: 5,
      name: "Skull Crusher",
      short_description:
        "Targets the triceps with a significant stretch and contraction.",
      image: "https://example.com/skull_crusher.jpg",
      instruction:
        "Lie on a bench with a barbell or EZ bar, lower the weight toward your forehead, and then extend your arms back to the starting position.",
    },
  ];

  const legs = [
    {
      legsId: 1,
      name: "Squat",
      short_description:
        "A powerful lower body exercise targeting quads, hamstrings, glutes, and core.",
      image: "https://example.com/squat.jpg",
      instruction:
        "Stand with feet shoulder-width apart, lower your hips back and down as if sitting, and push through your heels to return to standing.",
    },
    {
      legsId: 2,
      name: "Deadlift",
      short_description:
        "A full-body exercise that emphasizes the posterior chain, including hamstrings, glutes, and lower back.",
      image: "https://example.com/deadlift.jpg",
      instruction:
        "Stand with feet hip-width apart, grip the barbell, keep your back straight, and lift the bar by extending your hips and knees.",
    },
    {
      legsId: 3,
      name: "Lunges",
      short_description:
        "A leg exercise that works the quads, hamstrings, glutes, and stabilizing muscles.",
      image: "https://example.com/lunges.jpg",
      instruction:
        "Stand with feet together, step one foot forward, lower your hips until both knees are at a 90-degree angle, and return to standing.",
    },
    {
      legsId: 4,
      name: "Leg Press",
      short_description:
        "A machine exercise targeting the quads, hamstrings, and glutes.",
      image: "https://example.com/leg_press.jpg",
      instruction:
        "Sit in the leg press machine with feet shoulder-width apart, push the platform away by extending your legs, and then lower it back.",
    },
    {
      legsId: 5,
      name: "Romanian Deadlift",
      short_description:
        "A variation of the deadlift that emphasizes the hamstrings and glutes.",
      image: "https://example.com/romanian_deadlift.jpg",
      instruction:
        "Stand with feet shoulder-width apart, hold a barbell in front, hinge at the hips to lower the bar, and return to standing by extending the hips.",
    },
  ];

  const core = [
    {
      coreId: 1,
      name: "Plank",
      short_description:
        "A core exercise that strengthens the abdominals, back, and stabilizing muscles.",
      image: "https://example.com/plank.jpg",
      instruction:
        "Start in a push-up position, but rest on your forearms instead of your hands. Keep your body in a straight line from head to heels.",
    },
    {
      coreId: 2,
      name: "Russian Twist",
      short_description:
        "An oblique exercise that improves core rotation strength.",
      image: "https://example.com/russian_twist.jpg",
      instruction:
        "Sit on the floor, lean back slightly, hold a weight in both hands, and rotate your torso from side to side, tapping the floor with the weight.",
    },
    {
      coreId: 3,
      name: "Leg Raise",
      short_description: "A lower ab exercise that engages the entire core.",
      image: "https://example.com/leg_raise.jpg",
      instruction:
        "Lie on your back with legs straight. Lift your legs up to a 90-degree angle, then lower them back down without touching the floor.",
    },
    {
      coreId: 4,
      name: "Bicycle Crunch",
      short_description: "Targets the rectus abdominis and obliques.",
      image: "https://example.com/bicycle_crunch.jpg",
      instruction:
        "Lie on your back with hands behind your head, bring one knee toward your chest, and rotate your torso to touch the opposite elbow to the knee.",
    },
    {
      coreId: 5,
      name: "Ab Wheel Rollout",
      short_description:
        "A challenging exercise for the entire core, especially the abdominals.",
      image: "https://example.com/ab_wheel_rollout.jpg",
      instruction:
        "Kneel on the floor holding an ab wheel, roll forward until your body is almost parallel to the ground, then pull back to the starting position.",
    },
  ];

  return (
    <div className="min-h-screen bg-bgDarkest text-white flex flex-col items-center px-4 py-12 md:py-[8rem]">
      <h1 className="text-4xl font-bold underline text-accent">
        Weight Training Exercises
      </h1>
      {/* Shoulders */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Shoulders </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {shoulders.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Chest */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Chest </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {chest.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Back */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Back </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {back.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Biceps */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Biceps </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {biceps.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Triceps */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Triceps </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {triceps.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Legs */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Legs </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {legs.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
      {/* Core */}
      <h3 className="text-2xl bold underline my-12 text-accent"> Core </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {core.map((pose, index) => (
          <PoseCard key={index} pose={pose} />
        ))}
      </div>
    </div>
  ); 
}

export default Weighttraining