"use client";
import { useState } from "react";
import HabitList from "./components/HabitList";
import NewHabitInput from "./components/NewHabitInput";

export default function Home() {
  {/* Sample setup for testing */}
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Drink Water",
      days: Array(7).fill(false),
    },
    {
      id: 2,
      name: "Exercise",
      days: Array(7).fill(false),
    },
    {
      id: 3,
      name: "Read",
      days: Array(7).fill(false),
    },
  ]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      {/* Main container */}
      <div className="max-w-4xl px-4 flex flex-col gap-6">
        {/* Title header */}
        <p className="text-blue-600 text-center text-xl font-bold">
          Habit Tracker
        </p>
        {/* Habits */}
        <HabitList habits={habits} setHabits={setHabits} />
        <NewHabitInput/>
      </div>
    </main>
  );
}
