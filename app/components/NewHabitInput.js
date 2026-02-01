import NewHabitSubmitButton from "./NewHabitSubmitButton.js";

export default function NewHabitInput() {
   const namePlaceholders = ["Exercise", "Go outside", "Practice new hobby", "Read", "Call a friend", "Meditate", "In bed on time"];
   const randomIndex = Math.floor(Math.random() * namePlaceholders.length);
   const item = "Ex: " + namePlaceholders[randomIndex];
   return (
      <>
         <div className="flex">
            <div className="relative text-gray-500 text-xs bottom-2 left-1">New habit name</div>
            <div className="relative text-gray-500 text-xs bottom-2 left-56">Days per week</div>
         </div>
         <div className="relative flex gap-3 bottom-7 left-2">
            <input className="relative right-2 w-88 border-2 border-gray-200 rounded-md p-1 pl-2 focus:outline-none" type="text" placeholder={item}></input>
            <select className="w-10 p-1 relative right-3 opacity-30 hover:cursor-pointer rounded-lg bg-black text-white transition-all duration-300 ease-in-out hover:opacity-50" placeholder="Days per week (1-7)">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
            </select>
            <NewHabitSubmitButton/>
         </div>
      </>
   );
   
}