interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  instructorInitials: string;
  lectures: number;
  rating: number;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  hoverColor: string;
}

export default function CourseCard({
  title,
  description,
  instructor,
  instructorInitials,
  lectures,
  rating,
  gradientFrom,
  gradientTo,
  accentColor,
  hoverColor,
}: CourseCardProps) {
  return (
    <div className="relative group/card flex-shrink-0 w-[400px]">
      {/* Card Glow */}
      <div 
        className="absolute -inset-[2px] rounded-2xl blur-xl opacity-0 group-hover/card:opacity-100 transition-all duration-500"
        style={{
          background: `linear-gradient(to bottom right, ${accentColor}40, ${hoverColor}30, ${accentColor}40)`
        }}
      ></div>
      
      <div 
        className="relative h-[582px] bg-gradient-to-br from-[#0a1628] to-[#031023] border-2 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
        style={{
          borderColor: `${accentColor}66`,
          boxShadow: `0 0 0 0 ${accentColor}00`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = `${hoverColor}99`;
          e.currentTarget.style.boxShadow = `0 20px 60px ${accentColor}4D`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = `${accentColor}66`;
          e.currentTarget.style.boxShadow = `0 0 0 0 ${accentColor}00`;
        }}
      >
        {/* Top Corner Accent */}
        <div 
          className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20"
          style={{
            background: `linear-gradient(to bottom right, ${accentColor}, transparent)`
          }}
        ></div>
        
        {/* Discount Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur-sm opacity-75"></div>
            <div className="relative px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg border border-orange-300/30">
              <span className="text-xs font-black text-white tracking-wide">SAVE 30%</span>
            </div>
          </div>
        </div>
        
        <div className="relative flex flex-col gap-5">
          {/* Premium Image with Overlay */}
          <div 
            className="relative h-[280px] rounded-xl overflow-hidden border-2 shadow-lg transition-colors duration-300"
            style={{
              borderColor: `${accentColor}4D`
            }}
          >
            <div 
              className="w-full h-full"
              style={{
                background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`
              }}
            ></div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000"></div>
            
            {/* Premium Info Bar */}
            <div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#031023] via-[#031023]/95 to-transparent backdrop-blur-md px-4 py-3 flex items-center justify-between border-t"
              style={{
                borderColor: `${accentColor}33`
              }}
            >
              <div className="flex items-center gap-2">
                <svg 
                  className="w-5 h-5"
                  style={{ color: hoverColor }}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-white text-base font-semibold">{lectures} Lectures</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-white text-base font-bold">{rating}</span>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FFD700">
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 
              className="text-2xl leading-8 font-bold text-white transition-colors"
              style={{
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'white';
              }}
            >
              {title}
            </h3>
            <p className="text-base leading-6 text-[#C7E7F9]/80 text-justify">
              {description}
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: `linear-gradient(to bottom right, ${accentColor}, ${gradientTo})`
              }}
            >
              <span className="text-white text-xs font-bold">{instructorInitials}</span>
            </div>
            <p className="text-base text-[#86B8F3] font-medium">{instructor}</p>
          </div>
        </div>
        
        {/* Premium Enrol Button */}
        <div className="relative">
          <div 
            className="absolute -inset-1 rounded-xl blur-md opacity-50 group-hover/card:opacity-100 transition-opacity"
            style={{
              background: `linear-gradient(to right, ${accentColor}, ${hoverColor}, ${accentColor})`
            }}
          ></div>
          <button 
            className="relative w-full text-white px-6 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-[1.02] shadow-xl overflow-hidden border"
            style={{
              background: `linear-gradient(to right, ${accentColor}, ${gradientTo})`,
              borderColor: `${hoverColor}4D`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(to right, ${hoverColor}, ${accentColor})`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(to right, ${accentColor}, ${gradientTo})`;
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-700"></div>
            <span className="relative">Enrol Now →</span>
          </button>
        </div>
      </div>
    </div>
  );
}
