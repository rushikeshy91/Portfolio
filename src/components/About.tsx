export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          About Me
        </h2>
        <p className="text-center text-blue-400 mb-12 text-lg">
          From Infrastructure Engineer to IAM Security Leader
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Element */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-800 rounded-lg relative overflow-hidden">
              {/* Security Lock Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-48 h-48 text-white/20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
              </div>
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">12+</div>
                    <div className="text-xs text-gray-300">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">2</div>
                    <div className="text-xs text-gray-300">Certifications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-400">IAM</div>
                    <div className="text-xs text-gray-300">Specialist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">The Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                Started my career as an <span className="text-white font-semibold">Infrastructure Engineer</span> for 
                <span className="text-cyan-400"> 7 years</span>, building and managing enterprise cloud environments 
                on AWS and Azure. Recognized the critical importance of identity security in modern infrastructure.
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-semibold text-red-400 mb-2">The Transition</h3>
              <p className="text-gray-300 leading-relaxed">
                Pivoted to <span className="text-white font-semibold">Cybersecurity</span> with a focus on 
                <span className="text-cyan-400"> Identity & Access Management</span>. Spent the last 
                <span className="text-cyan-400"> 5 years</span> architecting zero-trust IAM solutions, implementing 
                privileged access security, and leading security engineering teams.
              </p>
            </div>
            
            <div className="border-l-4 border-cyan-500 pl-4">
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Current Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                As an <span className="text-white font-semibold">Engineering Lead</span>, I specialize in 
                BeyondTrust and CyberArk implementations, EntraID/Active Directory security, and building 
                comprehensive IAM governance frameworks for enterprise environments.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com/in/rushikesh-yeldari" target="_blank" rel="noopener noreferrer" 
                 className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold">
                LinkedIn
              </a>
              <a href="https://github.com/ryeldari" target="_blank" rel="noopener noreferrer"
                 className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-semibold">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
