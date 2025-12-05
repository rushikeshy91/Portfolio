const skills = [
  { 
    category: "IAM & PAM Tools", 
    icon: "🔐",
    items: ["BeyondTrust", "CyberArk", "EntraID (Azure AD)", "Active Directory", "SSO"] 
  },
  { 
    category: "Cloud & Infrastructure", 
    icon: "☁️",
    items: ["AWS IAM", "Azure Security", "AWS Organizations", "Azure RBAC"] 
  },
  { 
    category: "Scripting & Automation", 
    icon: "⚡",
    items: ["PowerShell", "Python", "Bash", "REST APIs", "CI/CD Pipelines"] 
  },
  { 
    category: "Security & Monitoring", 
    icon: "🛡️",
    items: ["Splunk SIEM", "Azure Sentinel", "IAM Governance", "Threat Detection", "Compliance Auditing"] 
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Technical Expertise
        </h2>
        <p className="text-center text-blue-400 mb-12 text-lg">
          Tools & Technologies I Work With Daily
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillSet, index) => (
            <div 
              key={index} 
              className="bg-slate-800 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{skillSet.icon}</span>
                <h3 className="text-lg font-bold text-blue-400">
                  {skillSet.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {skillSet.items.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-gray-300 flex items-start gap-2 group"
                  >
                    <span className="text-cyan-400 mt-1 group-hover:scale-125 transition-transform">▹</span>
                    <span className="group-hover:text-white transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Bar */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">7+</div>
            <div className="text-blue-100">Years Infrastructure</div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-red-100">Years Cybersecurity</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">2</div>
            <div className="text-cyan-100">IAM Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
}
