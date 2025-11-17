'use client';

import dynamic from 'next/dynamic';

// Type declaration for react-india-states-map
declare module 'react-india-states-map' {
  const IndiaStatesMap: any;
  export default IndiaStatesMap;
}

const IndiaStatesMap = dynamic(() => import('react-india-states-map'), {
  ssr: false,
});

interface City {
  name: string;
  position: { x: string; y: string };
}

const cities: City[] = [
  { name: "Chandigarh", position: { x: "35%", y: "20%" } },
  { name: "Delhi", position: { x: "38%", y: "23%" } },
  { name: "Jaipur", position: { x: "30%", y: "30%" } },
  { name: "Lucknow", position: { x: "45%", y: "30%" } },
  { name: "Kolkata", position: { x: "68%", y: "40%" } },
  { name: "Mumbai", position: { x: "28%", y: "52%" } },
  { name: "Pune", position: { x: "30%", y: "58%" } },
  { name: "Hyderabad", position: { x: "38%", y: "62%" } },
  { name: "Bengaluru", position: { x: "35%", y: "73%" } },
  { name: "Chennai", position: { x: "44%", y: "74%" } },
];

interface IndiaMapProps {
  onCityClick: (cityName: string) => void;
}

export default function IndiaMap({ onCityClick }: IndiaMapProps) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-3xl h-full">
        <div className="india-map-container">
          <IndiaStatesMap />
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {cities.map(({ name, position }) => (
            <div
              key={name}
              className="absolute pointer-events-auto"
              style={{ top: position.y, left: position.x, transform: 'translate(-50%, -50%)' }}
            >
              <button onClick={() => onCityClick(name)} className="relative group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 ring-2 ring-white shadow-xl flex items-center justify-center hover:scale-125 transition-all">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
