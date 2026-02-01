import WeekCheckboxes from "./WeekCheckboxes";

export default function HabitRow({ habit, habits, setHabits }) {
  function toggleDay(dayIndex) {
    const updatedHabits = habits.map((h) =>
      h.id === habit.id
        ? {
            ...h,
            days: h.days.map((checked, i) =>
              i === dayIndex ? !checked : checked
            ),
          }
        : h
    );

    setHabits(updatedHabits);
  }

  return (
    <div className="flex items-center">
      <span className="w-30 p-1 pl-2.5 transition-all duration-300 ease-in-out text-black/70 font-medium hover:bg-black/40 hover:text-white hover:cursor-pointer rounded-lg mr-2">{habit.name}</span>

      <WeekCheckboxes
        days={habit.days}
        onToggle={toggleDay}
      />
    </div>
  );
}
