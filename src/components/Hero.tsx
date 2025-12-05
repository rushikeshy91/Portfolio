export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Security Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Animated Security Accents */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        {/* Security Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-mono">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          SECURE CONNECTION ESTABLISHED
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="text-blue-400">Rushikesh</span> <span className="text-white">Yeldari</span>
        </h1>
        
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold text-lg">
            Engineering Lead
          </span>
          <span className="text-gray-400 text-2xl">|</span>
          <span className="px-4 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg font-semibold text-lg">
            IAM Specialist
          </span>
        </div>
        
        <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          <span className="text-blue-400 font-semibold">12+ years</span> securing enterprise identities and infrastructure.
          From building scalable cloud systems to architecting zero-trust IAM solutions.
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Specializing in <span className="text-cyan-400">Identity & Access Management</span>, 
          <span className="text-cyan-400"> Privileged Access Security</span>, and 
          <span className="text-cyan-400"> Cloud Security Architecture</span>
        </p>
        
        {/* Location */}
        <div className="flex items-center justify-center gap-2 mb-12 text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
          </svg>
          <span>Pune, India</span>
        </div>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
          >
            View Projects
          </a>
          <a 
            href="#certifications" 
            className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300 font-semibold"
          >
            Certifications
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-red-500 text-red-400 rounded-lg hover:bg-red-500/10 transition-all duration-300 font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
