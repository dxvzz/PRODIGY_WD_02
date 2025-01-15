import { formatTime } from '../utils/formatTime';
import { ScrollArea } from "@/components/ui/scroll-area"

interface LapTimesProps {
  lapTimes: number[];
}

export function LapTimes({ lapTimes }: LapTimesProps) {
  return (
    <div className="mt-4">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 text-center text-gray-700">Lap Times</h2>
      <ScrollArea className="h-[200px] w-full rounded-md border p-4">
        <ul className="space-y-2">
          {lapTimes.map((lapTime, index) => (
            <li key={index} className="text-sm sm:text-base bg-gray-100 p-2 rounded-md flex justify-between items-center">
              <span className="font-semibold text-gray-700">Lap {index + 1}</span>
              <span className="text-gray-600">{formatTime(lapTime)}</span>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
}

