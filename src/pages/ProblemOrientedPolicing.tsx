import { Target, Search, TrendingDown, BarChart3, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProblemOrientedPolicing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/20 to-slate-50">
      <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white pt-24 sm:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.1),transparent_50%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-16">
          <Link to="/" className="inline-flex items-center space-x-2 text-emerald-100 hover:text-white mb-8 transition-all group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-4 sm:space-x-6 mb-6">
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 shadow-xl">
              <Target className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Problem-Oriented Policing</h1>
          </div>
          <p className="text-lg sm:text-xl text-emerald-50 max-w-3xl leading-relaxed">
            Identifying and addressing the root causes of crime through data analysis and community collaboration.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The POP Approach</h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Problem-Oriented Policing (POP) is a strategic approach developed by Herman Goldstein that goes beyond responding to individual incidents. Instead of just reacting to crimes as they occur, POP focuses on identifying patterns, analyzing underlying causes, and implementing targeted solutions.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              POP uses the SARA model—a decision-making framework developed by John Eck and William Spelman in 1987 that incorporates analysis and research, tailoring solutions to specific problems, and evaluating the effectiveness of those responses.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              This proactive methodology uses data-driven insights and community input to develop customized responses that address the root causes of recurring problems, leading to sustainable crime reduction.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-emerald-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <BarChart3 className="w-7 h-7 text-emerald-600 mr-3" />
              Proven Results
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">17.3% Reduction in Violent Crime</div>
                  <div className="text-sm text-slate-600">10-year study showed significant decreases in violent index crimes</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">19.2% Drop in Robberies</div>
                  <div className="text-sm text-slate-600">Statistically significant reductions in robbery incidents</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">15.4% Fewer Assaults</div>
                  <div className="text-sm text-slate-600">Measurable reduction in aggravated assault incidents</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Reduced Disorder & Calls</div>
                  <div className="text-sm text-slate-600">Lower social/physical incivilities and fewer calls for service</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-8 sm:p-12 mb-16 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4 text-center">The SARA Model</h2>
            <p className="text-center text-emerald-50 mb-8 max-w-3xl mx-auto text-sm">
              The SARA model (Scanning, Analysis, Response, Assessment) is a decision-making framework that incorporates systematic analysis and research to tailor solutions to specific problems and evaluate their effectiveness.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Search className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Scanning</h3>
                <p className="text-emerald-50 text-sm">
                  Identifying and prioritizing recurring problems using crime statistics, community feedback, and officer observations to select issues for deeper examination.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Analysis</h3>
                <p className="text-emerald-50 text-sm">
                  Deeply analyzing the problem's causes to understand who is involved, what is happening, when and where it occurs, why it happens, and how it unfolds.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Response</h3>
                <p className="text-emerald-50 text-sm">
                  Determining and implementing tailored interventions that address the root causes identified during analysis, often involving multiple stakeholders.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="bg-white/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <TrendingDown className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                <p className="text-emerald-50 text-sm">
                  Assessing and evaluating the impact of responses using data to determine effectiveness and make necessary adjustments for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Case Study: Downtown Vandalism</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-white border-r border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                  <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2">1</span>
                  Scanning
                </h3>
                <p className="text-sm text-slate-600">
                  Data showed recurring vandalism incidents in downtown area between 10 PM - 2 AM on weekends.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-white border-r border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                  <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2">2</span>
                  Analysis
                </h3>
                <p className="text-sm text-slate-600">
                  Investigation revealed poor lighting, lack of surveillance, and congregation of intoxicated individuals.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-white border-r border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                  <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2">3</span>
                  Response
                </h3>
                <p className="text-sm text-slate-600">
                  Installed better lighting, added cameras, increased late-night patrols, and partnered with local bars.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-emerald-50 to-white">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center">
                  <span className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-2">4</span>
                  Assessment
                </h3>
                <p className="text-sm text-slate-600">
                  Vandalism incidents decreased by 78% within three months. Community satisfaction improved.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Data-Driven</h3>
            <p className="text-sm text-slate-600">
              Leverages crime statistics, geographic mapping, and trend analysis to identify patterns and hot spots requiring intervention.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Collaborative</h3>
            <p className="text-sm text-slate-600">
              Engages community members, businesses, government agencies, and social services to develop comprehensive solutions.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Sustainable</h3>
            <p className="text-sm text-slate-600">
              Creates lasting improvements by addressing underlying issues rather than providing temporary fixes to recurring problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
