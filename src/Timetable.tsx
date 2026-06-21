import React, { useState } from 'react';
import { timetableData } from './timetableData';
import { Calendar, MapPin, User, Music } from 'lucide-react';

export default function Timetable() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  // Auto-select today's day (0 is Sunday, 1 is Monday, etc.)
  const todayIndex = new Date().getDay();
  const currentDayName = todayIndex === 0 ? "Sunday" : days[todayIndex - 1];
  
  const [selectedDay, setSelectedDay] = useState(currentDayName);

  const dayData = timetableData[selectedDay];

  const renderClassCard = (cls: any, index: number) => (
    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-3 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-gray-900 text-lg">{cls.time}</h4>
        <span className="bg-blue-50 text-blue-800 text-xs px-2 py-1 rounded font-semibold uppercase tracking-wide">
          {cls.form}
        </span>
      </div>
      <p className="text-gray-800 font-medium mb-3">{cls.batch}</p>
      <div className="flex items-center text-sm text-gray-600 bg-gray-50 p-2 rounded">
        <User className="w-4 h-4 mr-2 text-gray-500" />
        Faculty: <strong className="ml-1 text-gray-800">{cls.faculty}</strong>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-gray-50 min-h-screen">
      <div className="flex items-center mb-6 border-b pb-4">
        <Calendar className="w-6 h-6 mr-3 text-blue-700" />
        <h2 className="text-2xl font-bold text-gray-900">Weekly Timetable</h2>
      </div>

      {/* DAY PICKER BUTTONS */}
      <div className="flex overflow-x-auto space-x-2 pb-4 mb-6 hide-scrollbar">
        {days.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-6 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all shadow-sm ${
              selectedDay === day 
                ? 'bg-blue-700 text-white ring-2 ring-blue-300 ring-offset-1' 
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* STUDIO SPLIT VIEW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* STUDIO A */}
        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
          <div className="flex items-center mb-4 bg-white p-3 rounded-lg shadow-sm border border-blue-200">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-xl font-bold text-blue-900">Studio A</h3>
          </div>
          {dayData?.StudioA.length === 0 ? (
            <p className="text-gray-500 text-center py-8 italic">No classes scheduled</p>
          ) : (
            dayData?.StudioA.map((cls, idx) => renderClassCard(cls, idx))
          )}
        </div>

        {/* STUDIO B */}
        <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
          <div className="flex items-center mb-4 bg-white p-3 rounded-lg shadow-sm border border-purple-200">
            <Music className="w-5 h-5 text-purple-600 mr-2" />
            <h3 className="text-xl font-bold text-purple-900">Studio B</h3>
          </div>
          {dayData?.StudioB.length === 0 ? (
            <p className="text-gray-500 text-center py-8 italic">No classes scheduled</p>
          ) : (
            dayData?.StudioB.map((cls, idx) => renderClassCard(cls, idx))
          )}
        </div>

      </div>
    </div>
  );
}
