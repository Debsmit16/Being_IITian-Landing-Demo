export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#C7E7F9]">
      {/* Hero Section */}
      <section className="bg-[#031023] px-6 py-20">
        <div className="max-w-[1320px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Being Iitian
          </h1>
          <p className="text-xl text-[#C7E7F9] max-w-3xl mx-auto">
            Empowering JEE aspirants with world-class education and mentorship
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-16">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#031023] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Being Iitian, we believe that every student has the potential to achieve their dreams of getting into top engineering colleges in India. Our mission is to provide accessible, high-quality education that transforms aspirants into achievers.
              </p>
              <p className="text-lg text-gray-700">
                We combine expert teaching, personalized tracking, and innovative learning strategies to ensure that every student gets the support they need to succeed.
              </p>
            </div>
            <div className="bg-[#031023] rounded-lg p-12 text-center">
              <div className="text-6xl font-bold text-[#1E82E9] mb-4">10,000+</div>
              <p className="text-xl text-white">Students Transformed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="text-4xl font-bold text-[#031023] text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1E82E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7V11C2 16.55 6.84 21.74 12 23C17.16 21.74 22 16.55 22 11V7L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#031023] mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of education delivery and student support
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1E82E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#031023] mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty and transparency in all our operations
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1E82E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11C17.66 11 18.99 9.66 18.99 8S17.66 5 16 5C14.34 5 13 6.34 13 8S14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8S9.66 5 8 5C6.34 5 5 6.34 5 8S6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#031023] mb-3">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community where students can grow and learn together
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="text-4xl font-bold text-[#031023] text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-[#031023] rounded-lg p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-white mb-2">Team Member Name</h3>
                <p className="text-[#86B8F3] mb-4">Position Title</p>
                <p className="text-[#FCFCFC] text-sm">
                  Brief description about the team member and their expertise in education.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
