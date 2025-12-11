import { Shield, Building2, Users, Handshake, Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CommunityPartnerships() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100/50 to-slate-50">
      <div className="relative bg-gradient-to-r from-slate-700 to-slate-800 text-white pt-24 sm:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.1),transparent_50%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-16">
          <Link to="/" className="inline-flex items-center space-x-2 text-slate-300 hover:text-white mb-8 transition-all group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-4 sm:space-x-6 mb-6">
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 shadow-xl">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Community Partnerships</h1>
          </div>
          <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
            Fostering strong relationships between law enforcement, local businesses, and community organizations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Building Stronger Communities Together</h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Community-oriented policing (COP) promotes organizational strategies that support the systematic use of partnerships and problem-solving techniques to proactively address the immediate conditions that give rise to public safety issues such as crime, social disorder, and fear of crime.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              COP encourages partnerships with stakeholders including other government agencies, community members, nonprofits and service providers, and private businesses. Effective partnerships between law enforcement and community stakeholders are essential to public safety.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              Research shows that cooperative partnerships are associated with considerably larger crime control effects than interventions relying on coercive engagement. If partnerships are effective, outcomes can be monumental in reducing crime and improving community relations.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-slate-200 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Handshake className="w-7 h-7 text-slate-700 mr-3" />
              Partnership Benefits
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-600">
                <div className="font-semibold text-slate-900 mb-1">Systematic Crime Reduction</div>
                <div className="text-sm text-slate-600">Partnerships provide systematic approaches to address crime and disorder effectively</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-600">
                <div className="font-semibold text-slate-900 mb-1">Shared Responsibility</div>
                <div className="text-sm text-slate-600">Government agencies, community groups, nonprofits, businesses, and citizens embrace public safety together</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-600">
                <div className="font-semibold text-slate-900 mb-1">Achieve More Together</div>
                <div className="text-sm text-slate-600">Accomplish what can't be done alone while avoiding redundancies between organizations</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-600">
                <div className="font-semibold text-slate-900 mb-1">Increased Legitimacy</div>
                <div className="text-sm text-slate-600">Community policing has significant positive benefits related to satisfaction and perceptions of police legitimacy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Partner Network</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all text-center">
              <Building2 className="w-10 h-10 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Private Businesses</h3>
              <p className="text-sm text-slate-600">
                Companies benefit from law enforcement's knowledge while supporting public safety as a shared responsibility
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all text-center">
              <Users className="w-10 h-10 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Nonprofits & Service Providers</h3>
              <p className="text-sm text-slate-600">
                Advocacy groups, victim services, and community development corporations addressing social issues
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all text-center">
              <Globe className="w-10 h-10 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Government Agencies</h3>
              <p className="text-sm text-slate-600">
                Prosecutors, health and human services, child support services, and schools working together
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all text-center">
              <Shield className="w-10 h-10 text-slate-700 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Community Members</h3>
              <p className="text-sm text-slate-600">
                Volunteers, activists, residents, and individuals who have an interest in the community
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-2xl p-8 sm:p-12 mb-16 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent)]"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 text-center">Partnership Programs in Action</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3">Cooperative Crime Reduction</h3>
                <p className="text-sm text-slate-200 mb-3">
                  Research confirms that cooperative partnerships produce considerably larger crime control effects than coercive approaches, making collaboration essential for public safety.
                </p>
                <div className="text-yellow-400 font-bold text-xs">Evidence-Based Approach</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3">Shared Responsibility Model</h3>
                <p className="text-sm text-slate-200 mb-3">
                  Government agencies, community groups, nonprofits, businesses, and private citizens all embrace public safety as a shared responsibility for maximum effectiveness.
                </p>
                <div className="text-yellow-400 font-bold text-xs">Multi-Sector Collaboration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3">Problem-Solving Partnerships</h3>
                <p className="text-sm text-slate-200 mb-3">
                  Partnerships use problem-solving techniques to proactively address conditions that give rise to crime, social disorder, and fear rather than just responding to incidents.
                </p>
                <div className="text-yellow-400 font-bold text-xs">Proactive Strategy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-3">Increased Advocacy & Resources</h3>
                <p className="text-sm text-slate-200 mb-3">
                  Collaborations increase advocacy, develop resources, avoid redundancies between organizations, and achieve outcomes impossible to accomplish alone.
                </p>
                <div className="text-yellow-400 font-bold text-xs">Amplified Impact</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-shadow mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Become a Partner</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Reach Out</h3>
              <p className="text-sm text-slate-600">
                Contact our Community Partnerships coordinator to discuss your organization's interests and capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Collaborate</h3>
              <p className="text-sm text-slate-600">
                Work together to identify community needs and develop programs that leverage both parties' strengths.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Make Impact</h3>
              <p className="text-sm text-slate-600">
                Launch initiatives, track outcomes, and continuously improve programs based on community feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Research Evidence</h3>
            <p className="text-sm text-slate-700 mb-4">
              <span className="font-semibold">Key Finding:</span> Cooperative partnerships are associated with considerably larger crime control effects than interventions relying on coercive engagement styles.
            </p>
            <p className="text-sm text-slate-700 mb-4">
              <span className="font-semibold">Impact:</span> Community policing has been found to have significant positive benefits related to community satisfaction and perceptions of police legitimacy.
            </p>
            <p className="text-xs text-blue-800">
              Source: Office of Juvenile Justice and Delinquency Prevention systematic reviews
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border border-green-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Partnership Benefits</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-600 pl-4">
                <div className="font-semibold text-slate-900 mb-1">Systematic Crime Reduction</div>
                <div className="text-sm text-slate-600">Partnerships provide structured approaches to address crime and disorder</div>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <div className="font-semibold text-slate-900 mb-1">Monumental Outcomes</div>
                <div className="text-sm text-slate-600">Effective partnerships can be monumental in reducing crime and improving relations</div>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <div className="font-semibold text-slate-900 mb-1">Resource Efficiency</div>
                <div className="text-sm text-slate-600">Avoid redundancies and increase advocacy and resource development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
