export default function CoursesPage() {
  const courses = [
    {
      title: "JEE Main Complete Course",
      description: "Comprehensive course covering all topics for JEE Main with practice tests and doubt sessions",
      tutor: "Dr. Rajesh Kumar",
      lectures: 120,
      rating: 4.8,
      level: "Beginner to Advanced"
    },
    {
      title: "JEE Advanced Physics",
      description: "Deep dive into Physics concepts with problem-solving strategies for JEE Advanced",
      tutor: "Prof. Anita Sharma",
      lectures: 80,
      rating: 4.9,
      level: "Advanced"
    },
    {
      title: "Mathematics for JEE",
      description: "Master mathematics with conceptual clarity and extensive practice problems",
      tutor: "Dr. Suresh Patel",
      lectures: 100,
      rating: 4.7,
      level: "Intermediate"
    },
    {
      title: "Chemistry Complete",
      description: "Organic, Inorganic, and Physical Chemistry for both JEE Main and Advanced",
      tutor: "Dr. Priya Singh",
      lectures: 90,
      rating: 4.8,
      level: "Beginner to Advanced"
    }
  ];

  return (
    <div className="min-h-screen bg-[#C7E7F9]">
      {/* Hero Section */}
      <section className="bg-[#031023] px-6 py-20">
        <div className="max-w-[1320px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Courses
          </h1>
          <p className="text-xl text-[#C7E7F9] max-w-3xl mx-auto">
            Choose from our comprehensive selection of courses designed by IIT alumni and expert educators
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-6 py-16">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-[#031023] border border-[#9ED6F5] rounded-lg p-6 flex flex-col gap-6 hover:shadow-2xl transition-shadow"
              >
                <div className="flex flex-col gap-4">
                  {/* Course Image Placeholder */}
                  <div className="w-full h-64 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                    <svg className="w-20 h-20 text-white opacity-50" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"/>
                    </svg>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-white">{course.title}</h3>
                    
                    {/* Description */}
                    <p className="text-[#FCFCFC] text-base">{course.description}</p>
                    
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="text-[#86B8F3]">
                        <span className="font-semibold">Instructor:</span> {course.tutor}
                      </div>
                      <div className="text-[#86B8F3]">
                        <span className="font-semibold">Lectures:</span> {course.lectures}
                      </div>
                      <div className="text-[#86B8F3]">
                        <span className="font-semibold">Level:</span> {course.level}
                      </div>
                      <div className="text-[#86B8F3] flex items-center gap-1">
                        <span className="font-semibold">Rating:</span> {course.rating}
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FFD700">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="bg-[#1E82E9] hover:bg-[#1a73d1] transition-colors text-white px-6 py-3 rounded text-lg font-semibold w-full">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
