import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

export default function OpenHours() {
    const [isOpen, setIsOpen] = useState(false);

    const weekSchedule = [
        { day: 'Sun', hours: 'Closed' },
        { day: 'Mon', hours: '09:00 am – 05:00 pm' },
        { day: 'Tue', hours: '09:00 am – 05:00 pm' },
        { day: 'Wed', hours: '09:00 am – 05:00 pm' },
        { day: 'Thu', hours: '09:00 am – 05:00 pm' },
        { day: 'Fri', hours: '09:00 am – 05:00 pm' },
        { day: 'Sat', hours: 'Closed' },
    ];

    // Use getDay() to determine the current day of the week.
    const currentDayIndex = new Date().getDay();
    const todayHours = weekSchedule[currentDayIndex].hours;

    return (
        <div className="p-4 text-white flex flex-row gap-2">
            {/* The container for the header and the chevron */}
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {!isOpen && (
                    <p className="text-sm">
                        Today
                        <span className={`ml-2 text-sm font-semibold ${todayHours !== 'Closed' ? 'text-cyan-500' : 'text-red-500'}`}>
                            {todayHours}
                        </span>
                    </p>
                )}
            </div>
            <div>
                {isOpen && (
                    <div className="mt-4 flex flex-row">
                        <table className="w-full">
                            <tbody>
                                {weekSchedule.map((schedule, index) => (
                                    <tr key={index} className={`${index === currentDayIndex ? (schedule.hours !== "Closed" ? 'text-cyan-500' : 'text-red-500') : 'text-neutral-400'}`}>
                                        <td className="py-1 px-1">{schedule.day}</td>
                                        <td className="py-1 font-semibold">{schedule.hours}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-2 flex-1 justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <ChevronUpIcon className="hover:text-cyan-500 w-4 h-4" /> : ""}
                        </div>
                    </div>
                )}

            </div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? " " : <ChevronDownIcon className="hover:text-cyan-500 w-4 h-4" />}
            </div>
        </div>
    );
}
