import HabitRow from "./HabitRow";

export default function HabitList({ habits, setHabits }) {
  return (
    <div className="flex flex-col gap-4">
      {habits.map((habit) => (
        <HabitRow
          key={habit.id}
          habit={habit}
          habits={habits}
          setHabits={setHabits}
        />
      ))}
    </div>
  );
}
