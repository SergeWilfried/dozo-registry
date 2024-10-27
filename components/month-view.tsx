'use client'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function MonthView() {
  const [currentMonth, setCurrentMonth] = useState<Date | null>(null); // Initialize as null

  useEffect(() => {
    setCurrentMonth(new Date()); // Set current month on mount
  }, []);

  const handlePrevMonth = () => {
    if (currentMonth) {
      setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
    }
  };

  const handleNextMonth = () => {
    if (currentMonth) {
      setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
    }
  };

  if (!currentMonth) return null; // Render nothing until currentMonth is set

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <div className="text-2xl font-bold">{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={handlePrevMonth}>
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleNextMonth}>
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
        <div className="font-medium text-muted-foreground">Sun</div>
        <div className="font-medium text-muted-foreground">Mon</div>
        <div className="font-medium text-muted-foreground">Tue</div>
        <div className="font-medium text-muted-foreground">Wed</div>
        <div className="font-medium text-muted-foreground">Thu</div>
        <div className="font-medium text-muted-foreground">Fri</div>
        <div className="font-medium text-muted-foreground">Sat</div>
        {Array.from({ length: 35 }, (_, i) => (
          <div
            key={i}
            className={`rounded-md p-4 ${i % 7 === 0 ? "col-start-1" : ""} ${
              i === 16 ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/50 cursor-pointer"
            }`}
          >
            <div className="font-medium">{i + 1}</div>
            <div className="text-sm text-muted-foreground">
              {i === 16 && <div className="bg-primary/20 text-primary rounded-md px-2 py-1 mt-2">Team Meeting</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
