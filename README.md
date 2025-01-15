# Stopwatch Web Application

## Overview

This project is a modern, responsive stopwatch web application built with Next.js, React, and Tailwind CSS. It features a clean, intuitive interface with start, pause, reset, and lap functionality.

## Features

- Start, pause, and reset stopwatch
- Record lap times
- Responsive design that works on desktop and mobile devices
- Clean, modern UI with smooth animations
- Built with accessibility in mind

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) for icons
- [shadcn/ui](https://ui.shadcn.com/) for UI components

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/stopwatch-app.git
   cd stopwatch-app
   \`\`\`

2. Install the dependencies:
   \`\`\`
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

- Click the "Start" button to start the stopwatch
- Click "Pause" to pause the stopwatch
- Click "Reset" to reset the stopwatch to 00:00:00.00
- Click "Lap" to record a lap time (only available when the stopwatch is running)
- Scroll through recorded lap times in the lap times section

## Project Structure

- \`app/\`: Contains the main application files
  - \`layout.tsx\`: The main layout component
  - \`page.tsx\`: The main page component
  - \`globals.css\`: Global styles
- \`components/\`: React components used in the application
  - \`Stopwatch.tsx\`: The main Stopwatch component
  - \`Display.tsx\`: Displays the current time
  - \`LapTimes.tsx\`: Displays recorded lap times
- \`utils/\`: Utility functions
  - \`formatTime.ts\`: Function to format time for display

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

