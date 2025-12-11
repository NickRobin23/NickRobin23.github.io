import { Heart, Users, Trophy, BookOpen, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function YouthOutreach() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/20 to-slate-50">
      <div className="relative bg-gradient-to-r from-rose-600 to-rose-700 text-white pt-24 sm:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.1),transparent_50%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-16">
          <Link to="/" className="inline-flex items-center space-x-2 text-rose-100 hover:text-white mb-8 transition-all group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-4 sm:space-x-6 mb-6">
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 shadow-xl">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Youth Outreach Program</h1>
          </div>
          <p className="text-lg sm:text-xl text-rose-50 max-w-3xl leading-relaxed">
            Building positive relationships with young people through mentorship, sports programs, and educational workshops.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Youth Outreach Matters</h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Law enforcement youth mentoring programs support the positive development of youth, improving self-esteem and reducing delinquent acts. By engaging young people in positive, non-enforcement contexts, these programs establish trust—crucial for effective law enforcement and crime prevention.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Research shows that young people who have a stable, trusted adult in their lives are far less likely to join gangs, engage in violence, drop out of school, or get involved in crime. Mentorship not only reduces risky behavior but also builds resilience, confidence, and long-term opportunities.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Studies confirm that 67% of adolescents found structured mentoring relationships most helpful when they lasted over a year. The longer the association continues, the stronger it becomes, leading to healthier attitudes toward school and improved class attendance.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-rose-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Star className="w-7 h-7 text-rose-600 mr-3" />
              Program Impact
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-700">Crime Prevention Success</span>
                  <span className="text-lg font-bold text-rose-600">Proven</span>
                </div>
                <div className="text-sm text-slate-600 mb-2">Mentored youth show reduced delinquent acts and improved behavior</div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-700">Trust Building Impact</span>
                  <span className="text-lg font-bold text-rose-600">High</span>
                </div>
                <div className="text-sm text-slate-600 mb-2">Promotes positive perceptions of police among youth</div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-rose-500 to-rose-600 h-3 rounded-full transition-all duration-1000" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-700">Long-term Relationships</span>
                  <span className="text-lg font-bold text-rose-600">67%</span>
                </div>
                <div className="text-sm text-slate-600 mb-2">Most helpful when mentoring lasts over one year</div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000" style={{ width: '67%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Youth Programs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:border-rose-300 hover:shadow-xl transition-all">
              <Trophy className="w-10 h-10 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Police Activities Leagues</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Educational, athletic, and recreational activities that create trust and understanding between police officers and youth through positive engagement.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:border-rose-300 hover:shadow-xl transition-all">
              <BookOpen className="w-10 h-10 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Prevention & Education</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Programs educating youth about law enforcement through peer and police mentorship to prevent gang recruitment and criminal involvement.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:border-rose-300 hover:shadow-xl transition-all">
              <Users className="w-10 h-10 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Structured Mentorship</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Long-term one-on-one relationships that improve schoolwork, maintain healthier attitudes toward school, and reduce risky behavior.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-rose-600 to-rose-700 text-white rounded-2xl p-8 sm:p-12 mb-16 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 text-center">Program Activities</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3">Early Intervention Focus</h3>
                <p className="text-sm text-rose-50">
                  Proactive measures to deter youth from engaging in criminal activity while making connections and building relationships with vulnerable and at-risk youth.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3">Building Resilience</h3>
                <p className="text-sm text-rose-50">
                  Programs that build confidence, resilience, and long-term opportunities while encouraging youth to seek help and support when needed.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3">Academic Support</h3>
                <p className="text-sm text-rose-50">
                  Mentorship that improves young people's behavior and schoolwork, maintaining healthier attitudes toward school and improving class attendance.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3">Investment in Future</h3>
                <p className="text-sm text-rose-50">
                  Today's mentoring, prevention, and intervention programs result in crime reduction benefits for tomorrow's communities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-shadow mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Success Stories</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-rose-600 pl-6 py-3 bg-gradient-to-r from-rose-50 to-transparent rounded-r-lg">
              <p className="text-slate-700 mb-2">
                <span className="font-semibold">Research Finding:</span> Young people who have stable, trusted adults in their lives are far less likely to join gangs, engage in violence, drop out of school, or get involved in crime.
              </p>
              <p className="text-xs text-slate-600">Source: National studies on youth mentorship and crime prevention</p>
            </div>
            <div className="border-l-4 border-rose-600 pl-6 py-3 bg-gradient-to-r from-rose-50 to-transparent rounded-r-lg">
              <p className="text-slate-700 mb-2">
                <span className="font-semibold">Evidence-Based Results:</span> Law enforcement youth mentoring programs improve self-esteem, reduce delinquent acts, and help youth maintain healthier attitudes toward school and improve class attendance.
              </p>
              <p className="text-xs text-slate-600">Source: FBI Law Enforcement Bulletin and OJJDP research</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
