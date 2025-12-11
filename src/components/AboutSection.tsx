import { CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const principles = [
  { title: "Trust Building", description: "Establishing transparent, accountable relationships with community members" },
  { title: "Proactive Prevention", description: "Focusing on preventing crime before it happens through engagement" },
  { title: "Collaborative Problem-Solving", description: "Working together to identify and address community concerns" },
  { title: "Decentralized Decision Making", description: "Empowering officers to make decisions based on local needs" }
];

export function AboutSection({ activeTab, setActiveTab }: AboutSectionProps) {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 relative overflow-hidden border-y-4 border-yellow-500">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L50 30 L70 30 L55 45 L60 65 L40 50 L20 65 L25 45 L10 30 L30 30 Z' stroke='%23ffd700' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 border-2 border-yellow-500/50">
            <span className="text-yellow-300 text-xs sm:text-sm font-bold tracking-wide">EDUCATIONAL RESOURCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 px-2">What is Community Policing?</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-2">
            A comprehensive philosophy and organizational strategy that promotes partnerships and proactive problem-solving to address the root causes of crime and social disorder.
          </p>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-wrap border-b border-slate-200">
            {['overview', 'principles', 'impact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-3 sm:px-6 py-3 sm:py-4 font-bold text-xs sm:text-sm uppercase transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 border-t-4 border-yellow-300'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border-t-4 border-transparent'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-4 sm:p-8 md:p-12">
            {activeTab === 'overview' && (
              <div className="animate-fade-in-up space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Understanding Community Policing</h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Community policing is a philosophy that shifts law enforcement from a reactive, incident-driven model to one that focuses on preventing harm through relationships, transparency, and shared problem-solving with their residents. The Massachusetts State Police (MSP) has woven this approach into its recent Excellence Initiative, a statewide effort to enhance operational effectiveness, expand community engagement, and strengthen public trust across the Commonwealth. Through this lens, troopers are expected to be visible partners in the communities they serve, not just responders when emergencies occur.
                </p>
                <p className="text-slate-700 leading-relaxed text-lg">
                  This approach rests on three key elements: community partnerships, organizational change, and collaborative problem-solving. MSP has created a civilian-led Community Affairs Office, launched a six-week Citizen’s Academy, and uses specialized teams and data-informed strategies to work with residents, schools, and youth organizations on long-term safety issues, rather than only responding to isolated calls for service.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Partnership Focused</h4>
                      <p className="text-slate-600 text-sm">Working together with community stakeholders</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Problem Solving</h4>
                      <p className="text-slate-600 text-sm">Addressing root causes of community issues</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'principles' && (
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Core Principles</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {principles.map((principle, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg">{principle.title}</h4>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'impact' && (
              <div className="animate-fade-in-up space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Measurable Impact</h3>
                <p className="text-slate-700 leading-relaxed text-lg mb-8">
                  Research and implementation data from Massachusetts and nationwide show that community policing strategies produce measurable improvements in public safety and community relations. Studies demonstrate substantial benefits when police departments fully commit to this approach.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">17.3%</div>
                    <div className="flex-1 bg-slate-100 h-4 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 h-full w-[18%] transition-all duration-1000"></div>
                    </div>
                    <span className="text-slate-700 font-medium">Reduced Crime Rates</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">68%</div>
                    <div className="flex-1 bg-slate-100 h-4 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full w-[68%] transition-all duration-1000"></div>
                    </div>
                    <span className="text-slate-700 font-medium">Increased Trust</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">55%</div>
                    <div className="flex-1 bg-slate-100 h-4 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-full w-[55%] transition-all duration-1000"></div>
                    </div>
                    <span className="text-slate-700 font-medium">Better Response Times</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center">81%</div>
                    <div className="flex-1 bg-slate-100 h-4 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-full w-[81%] transition-all duration-1000"></div>
                    </div>
                    <span className="text-slate-700 font-medium">Community Participation</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
