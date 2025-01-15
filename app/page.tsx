import { Stopwatch } from '../components/Stopwatch';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">Stopwatch</h1>
      <Stopwatch />
    </main>
  );
}

