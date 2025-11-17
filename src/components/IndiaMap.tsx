'use client';

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
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B3B6B] to-[#14487D]">
      <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
        {/* India Map SVG */}
        <svg viewBox="0 0 600 800" className="w-full h-full max-w-2xl">
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* India Map Outline */}
          <path
            d="M 280 80 L 300 70 L 320 75 L 340 90 L 350 110 L 355 130 L 360 150 L 365 170 L 368 190 L 370 210 L 375 230 L 380 250 L 390 270 L 400 290 L 410 310 L 420 330 L 430 350 L 440 370 L 450 390 L 460 410 L 470 430 L 480 450 L 485 470 L 488 490 L 490 510 L 490 530 L 488 550 L 485 570 L 480 590 L 475 610 L 470 625 L 460 640 L 448 652 L 435 662 L 420 670 L 405 675 L 390 678 L 375 680 L 360 680 L 345 678 L 330 675 L 315 670 L 300 665 L 285 658 L 270 650 L 260 640 L 250 625 L 245 610 L 242 595 L 240 580 L 238 565 L 235 550 L 232 535 L 230 520 L 228 505 L 225 490 L 222 475 L 220 460 L 218 445 L 215 430 L 212 415 L 210 400 L 208 385 L 205 370 L 202 355 L 200 340 L 198 325 L 195 310 L 192 295 L 190 280 L 188 265 L 185 250 L 182 235 L 180 220 L 178 205 L 175 190 L 172 175 L 170 160 L 170 145 L 172 130 L 175 115 L 180 100 L 188 85 L 198 75 L 210 68 L 225 65 L 240 67 L 255 72 L 268 78 Z"
            fill="#E8F4FD"
            stroke="#2C5F8D"
            strokeWidth="2"
            className="transition-colors hover:fill-[#D4EBFC]"
          />
          
          {/* State borders - simplified */}
          <g stroke="#4A8BC2" strokeWidth="1" fill="none" opacity="0.5">
            <path d="M 280 80 L 350 110 L 360 150" />
            <path d="M 350 110 L 370 210" />
            <path d="M 280 200 L 360 150 L 380 250" />
            <path d="M 240 280 L 380 250 L 390 320" />
            <path d="M 240 380 L 390 320 L 420 400" />
            <path d="M 240 480 L 420 400 L 450 480" />
            <path d="M 280 580 L 450 480 L 480 560" />
            <path d="M 320 640 L 480 560 L 470 625" />
          </g>
        </svg>
        
        {/* City Markers Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {cities.map(({ name, position }) => (
            <div
              key={name}
              className="absolute pointer-events-auto"
              style={{ top: position.y, left: position.x, transform: 'translate(-50%, -50%)' }}
            >
              <button 
                onClick={() => onCityClick(name)} 
                className="relative group cursor-pointer"
                aria-label={`View mentors in ${name}`}
              >
                {/* Pulsing effect */}
                <div className="absolute inset-0 w-12 h-12 rounded-full bg-red-500 animate-ping opacity-30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
                
                {/* Main marker */}
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 ring-2 ring-white shadow-xl flex items-center justify-center hover:scale-125 transition-all duration-300 hover:ring-4">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                
                {/* City name tooltip */}
                <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/95 px-4 py-2 rounded-lg text-sm font-semibold text-[#031023] shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 border border-gray-200">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-l border-t border-gray-200 rotate-45"></div>
                  {name}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
