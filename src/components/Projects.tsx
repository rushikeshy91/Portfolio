const projects = [
  {
    title: "Enterprise Zero-Trust IAM Architecture",
    description: "Designed and implemented comprehensive zero-trust identity framework for 10,000+ user enterprise using BeyondTrust Password Safe and session management",
    tags: ["BeyondTrust", "Zero-Trust", "PAM"],
    metrics: { users: "10K+", reduction: "85% risk", deployment: "6 months" },
    status: "Production",
  },
  {
    title: "CyberArk Privileged Access Migration",
    description: "Led migration from legacy PAM to CyberArk EPM, implementing least-privilege access controls and session monitoring for critical infrastructure",
    tags: ["CyberArk", "Migration", "Compliance"],
    metrics: { accounts: "5K+", compliance: "SOC 2", uptime: "99.9%" },
    status: "Completed",
  },
  {
    title: "EntraID Cloud Identity Governance",
    description: "Architected hybrid identity solution integrating on-prem Active Directory with Azure EntraID, implementing conditional access and MFA policies",
    tags: ["EntraID", "Azure AD", "Hybrid Identity"],
    metrics: { users: "15K+", mfa: "100%", sso: "50+ apps" },
    status: "Active",
  },
  {
    title: "Automated IAM Compliance Framework",
    description: "Built PowerShell and Python automation for continuous IAM compliance monitoring, access reviews, and privilege escalation detection",
    tags: ["PowerShell", "Python", "Automation"],
    metrics: { coverage: "100%", alerts: "Real-time", savings: "500hr/mo" },
    status: "Production",
  },
  {
    title: "Multi-Cloud IAM Strategy",
    description: "Developed unified IAM governance across AWS and Azure environments with centralized identity management and federated access",
    tags: ["AWS IAM", "Azure", "Federation"],
    metrics: { clouds: "2", accounts: "100+", policies: "500+" },
    status: "Active",
  },
  {
    title: "Privileged Session Monitoring",
    description: "Implemented comprehensive session recording and monitoring solution using BeyondTrust for audit compliance and threat detection",
    tags: ["Session Management", "Audit", "Compliance"],
    metrics: { sessions: "10K+/mo", retention: "7 years", incidents: "0" },
    status: "Production",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Featured Projects
        </h2>
        <p className="text-center text-blue-400 mb-12 text-lg">
          Enterprise IAM Implementations & Security Initiatives
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-900 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 ${
                  project.status === 'Production' || project.status === 'Active' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-slate-800/50 rounded-lg border border-cyan-500/10">
                {Object.entries(project.metrics).map(([key, value], i) => (
                  <div key={i} className="text-center">
                    <div className="text-cyan-400 font-bold text-sm">{value}</div>
                    <div className="text-gray-500 text-xs uppercase">{key}</div>
                  </div>
                ))}
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
