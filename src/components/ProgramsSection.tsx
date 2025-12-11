import { Users, Heart, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Neighborhood Watch",
    description: "Empowering citizens to be the eyes and ears of their community, creating safer neighborhoods through vigilance and cooperation.",
    color: "from-blue-500 to-blue-600",
    link: "/neighborhood-watch"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Youth Outreach",
    description: "Building positive relationships with young people through mentorship, sports programs, and educational workshops.",
    color: "from-red-500 to-red-600",
    link: "/youth-outreach"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Problem-Oriented Policing",
    description: "Identifying and addressing the root causes of crime through data analysis and community collaboration.",
    color: "from-green-500 to-green-600",
    link: "/problem-oriented-policing"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Community Partnerships",
    description: "Fostering strong relationships between law enforcement, local businesses, and community organizations.",
    color: "from-slate-500 to-slate-600",
    link: "/community-partnerships"
  }
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-12 sm:py-16 md:py-20 bg-white border-t-4 border-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L45 20 L45 40 L30 50 L15 40 L15 20 Z' stroke='%23475569' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block bg-slate-900 text-yellow-400 px-6 py-2 rounded-full font-bold text-sm tracking-wider mb-4 border-2 border-yellow-500">
            KEY STRATEGIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 sm:mb-4 px-2">Community Policing Programs</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-2">
            Essential initiatives that form the foundation of effective community policing, as implemented by modern law enforcement agencies like the Massachusetts State Police.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-slate-50 border-2 sm:border-4 border-slate-300 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-br ${program.color} w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl border-2 sm:border-4 border-white`} style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}>
                {program.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 uppercase">{program.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-0">{program.description}</p>
              <Link to={program.link} className="mt-4 sm:mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-bold py-2 px-4 sm:px-6 rounded-lg transition-all flex items-center justify-center sm:justify-start space-x-2 border-2 border-yellow-400 inline-flex">
                <span>Learn More</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
