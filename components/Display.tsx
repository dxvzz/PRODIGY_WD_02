import { formatTime } from '../utils/formatTime';

interface DisplayProps {
  time: number;
}

export function Display({ time }: DisplayProps) {
  return (
    <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center text-blue-600">
      {formatTime(time)}
    </div>
  );
}

