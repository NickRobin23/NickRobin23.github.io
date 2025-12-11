import { Building2, Users, Heart, Target, CheckCircle } from 'lucide-react';

const initiatives = [
  {
    title: "Troop Community Liaison Programs",
    description: "Dedicated community liaisons at each troop barracks work directly with municipalities to address local concerns and build lasting partnerships."
  },
  {
    title: "Youth Education & Mentorship",
    description: "State-wide programs including the MSP Youth Academy, school resource partnerships, and anti-bullying initiatives engage young people across Massachusetts."
  },
  {
    title: "Regional Town Halls",
    description: "Quarterly community forums hosted at troop headquarters where residents can meet with command staff and discuss public safety priorities."
  },
  {
    title: "Multi-Agency Collaboration",
    description: "Strategic partnerships with local police departments, community organizations, and municipal leaders to coordinate regional safety initiatives."
  }
];

export function InPracticeSection() {
  return (
    <section id="practice" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white border-y-4 border-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L50 30 L70 30 L55 45 L60 65 L40 50 L20 65 L25 45 L10 30 L30 30 Z' stroke='%23ffd700' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 border-2 border-yellow-500/50">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            <span className="text-yellow-300 text-xs sm:text-sm font-bold tracking-wide">CASE STUDY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 px-2">
            Community Policing in Practice
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-2">
            The Massachusetts State Police leads by example, implementing comprehensive community policing strategies across all 351 cities and towns in the Commonwealth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-yellow-500/30 hover:border-yellow-500/60 transition-all">
            <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 border-2 sm:border-4 border-yellow-300 shadow-xl" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}>
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">About MSP</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  The Massachusetts State Police protects communities across the entire Commonwealth and has made community policing a core part of their mission. Through statewide outreach, partnerships, and modern engagement strategies, MSP works to build trust and strengthen its connection with the people it serves.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-blue-500/30 hover:border-blue-500/60 transition-all">
            <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0 border-2 sm:border-4 border-blue-400 shadow-xl" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}>
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">The Approach</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  By strengthening statewide outreach, transparency efforts, and data-driven prevention strategies, MSP has shifted toward a modern community-policing model that focuses on trust, early intervention, and collaborative safety partnerships with residents across Massachusetts.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-black text-white text-center mb-6 sm:mb-8 px-2">Key Initiatives</h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-slate-700 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-yellow-400 mb-1 sm:mb-2">{initiative.title}</h4>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{initiative.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-white text-center mb-6 sm:mb-8 px-2">Putting It Into Practice</h3>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border-2 sm:border-4 border-yellow-500/40 hover:border-yellow-500/60 transition-all">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
                The Massachusetts State Police puts community policing into practice by reaching out across the state, communicating openly, and building stronger partnerships with the public. As part of the new Excellence Initiative, MSP created a civilian-led Community Affairs Office to organize outreach, improve communication with residents, and support programs that let people share their safety concerns directly. Troopers take part in community events, youth programs, and campus safety efforts so they can stay connected with the public during everyday life, not just when emergencies happen.
              </p>
              <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
               MSP’s approach also includes using Community Action Teams, problem solving based on real data, and proactive patrols that focus on understanding concerns before they become larger issues. Programs like the six week Citizen’s Academy give residents a closer look at how the State Police work and create open conversations between troopers and the community. Officers receive updated training in communication, professionalism, and accountability so they can interact with the public in a respectful and community focused way.
              </p>
              <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
                MSP works with schools, colleges, youth groups, businesses, and local agencies to address safety issues together across all types of communities. This team based model helps identify problems early, reduce crime, and build long lasting trust. It reflects MSP’s commitment to a modern style of policing that relies on cooperation and strong relationships with the people of Massachusetts.
              </p>
              <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed">
                Read more here: <h>https://www.mass.gov/news/massachusetts-state-police-launches-excellence-initiative-to-enhance-operational-effectiveness-strengthen-community-trust-and-promote-public-safety</h>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-slate-900/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-blue-500/30 max-w-4xl mx-auto">
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 mx-auto mb-3 sm:mb-4" />
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed italic px-2">
              "The success of community policing at the Massachusetts State Police demonstrates that when law enforcement agencies invest in relationships and trust-building across diverse communities, the entire Commonwealth benefits through enhanced public safety, stronger partnerships, and a shared commitment to service."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
