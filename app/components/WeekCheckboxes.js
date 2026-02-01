"use client";

export default function WeekCheckboxes({ days, onToggle }) {
   const dayLabels = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
   return (
      <div className="flex gap-2">
         {days.map((checked, index) => (
            <label
               key={index}
               className="relative cursor-pointer group"
            >
               <input
                  key={index}
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(index)}
                  className="sr-only peer"
               />
               {/* Checkbox window */}
               <div
                  className="
                  h-8 w-8
                  overflow-hidden
                  rounded-md border
                  border-gray-300
                  text-sm font-medium
                  text-black/40
                  select-none
                  transition-colors duration-300
                  peer-checked:bg-black/40
                  peer-checked:border-transparent
                  "
               >
                  {/* Sliding column */}
                  <div
                     className="
                     flex flex-col items-center
                     transition-transform duration-300 ease-in-out
                     peer-checked:-translate-y-8
                     "
                     style={{
                        transform: checked ? 'translateY(-2rem)' : undefined
                     }}
                     onMouseEnter={(e) => {
                        if (!checked) {
                           e.currentTarget.style.transform = 'translateY(-2rem)';
                        }
                     }}
                     onMouseLeave={(e) => {
                        if (!checked) {
                           e.currentTarget.style.transform = 'translateY(0)';
                        }
                     }}
                  >
                     {/* Day label */}
                     <span className="h-8 flex items-center justify-center">
                        {dayLabels[index]}
                     </span>

                     {/* Check icon */}
                     <span className="h-8 flex items-center justify-center">
                        <img src={checked ? "/check-white.svg" : "/check-black.svg"} alt="Checked" className={checked ? "" : "opacity-40"}/>
                     </span>
                  </div>
               </div>
            </label>
         ))}
      </div>
   );
}