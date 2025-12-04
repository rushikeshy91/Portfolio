const certifications = [
  {
    title: "BeyondTrust Certified Implementation Engineer",
    subtitle: "Password Safe",
    issuer: "BeyondTrust",
    date: "Active",
    icon: "🔐",
    color: "from-blue-600 to-cyan-600",
  },
  {
    title: "Microsoft Certified: Identity and Access Administrator Associate",
    subtitle: "SC-300",
    issuer: "Microsoft",
    date: "Active",
    icon: "🛡️",
    color: "from-cyan-600 to-blue-600",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Professional Certifications
        </h2>
        <p className="text-center text-blue-400 mb-12 text-lg">
          Industry-Recognized IAM & Security Credentials
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-slate-900 border border-blue-500/30 rounded-lg overflow-hidden hover:border-blue-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 group"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${cert.color} p-6 relative`}>
                <div className="absolute top-4 right-4 text-5xl opacity-20">
                  {cert.icon}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{cert.icon}</span>
                  <div className="flex-1">
                    <div className="text-xs text-blue-100 uppercase tracking-wider mb-1">
                      {cert.issuer}
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-white text-sm font-semibold">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-cyan-400 font-mono text-sm mb-4">
                  {cert.subtitle}
                </p>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Verified Credential</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Committed to continuous learning and staying current with IAM best practices
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 bg-slate-900 border border-blue-500/30 rounded-lg text-blue-400 text-sm">
              Zero-Trust Architecture
            </span>
            <span className="px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm">
              Privileged Access Management
            </span>
            <span className="px-4 py-2 bg-slate-900 border border-blue-500/30 rounded-lg text-blue-400 text-sm">
              Cloud Security
            </span>
            <span className="px-4 py-2 bg-slate-900 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm">
              Identity Governance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
