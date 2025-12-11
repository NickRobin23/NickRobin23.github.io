import { Users, Shield, Eye, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NeighborhoodWatch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-24 sm:pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.1),transparent_50%)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-16">
          <Link to="/" className="inline-flex items-center space-x-2 text-blue-100 hover:text-white mb-8 transition-all group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-4 sm:space-x-6 mb-6">
            <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/20 shadow-xl">
              <Users className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Neighborhood Watch Program</h1>
          </div>
          <p className="text-lg sm:text-xl text-blue-50 max-w-3xl leading-relaxed">
            Empowering citizens to be the eyes and ears of their community, creating safer neighborhoods through vigilance and cooperation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Neighborhood Watch?</h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Launched in 1972, Neighborhood Watch is a crime prevention program that stresses education and common sense. It counts on citizens to organize themselves and work with law enforcement to keep a trained eye and ear on their communities while demonstrating their presence at all times of day and night.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              The program works by reducing opportunities for crime to occur—it doesn't rely on altering or changing the criminal's behavior or motivation. Participants act as the eyes and ears of police, reporting promptly and accurately any unusual activity they observe.
            </p>
            <p className="text-base text-slate-700 leading-relaxed">
              After September 11, 2001, Neighborhood Watch expanded beyond traditional crime prevention to help neighborhoods focus on disaster preparedness, emergency response, and terrorism awareness.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-blue-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Shield className="w-7 h-7 text-blue-600 mr-3" />
              Key Benefits
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Evidence-Based Crime Reduction</div>
                  <span className="text-sm text-slate-600">Research shows Neighborhood Watch is associated with measurable reductions in crime</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Enhanced Police Detection</div>
                  <span className="text-sm text-slate-600">Increases flow of useful information from the public to law enforcement</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Social Control Mechanisms</div>
                  <span className="text-sm text-slate-600">Strengthens community cohesion and natural surveillance</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Reduced Opportunities for Crime</div>
                  <span className="text-sm text-slate-600">Makes neighborhoods less attractive targets through vigilance</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 mb-16 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="relative">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Start a Neighborhood Watch</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold border border-white/20">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Research Local Crime</h3>
                <p className="text-sm text-blue-50">Check police reports, conduct surveys, and learn residents' perceptions about crime in your area.</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold border border-white/20">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Partner with Police</h3>
                <p className="text-sm text-blue-50">Work with your police or sheriff's office—they're critical to a Watch group's credibility and provide necessary training.</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold border border-white/20">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Recruit Members</h3>
                <p className="text-sm text-blue-50">Canvass door-to-door. Ask those who seldom leave home to be "window watchers" reporting unusual activities.</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold border border-white/20">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Hold Regular Meetings</h3>
                <p className="text-sm text-blue-50">Police officers trained in crime prevention lead meetings covering surveillance, home security, and communication.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-slate-100 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Eye className="w-7 h-7 text-blue-600 mr-3" />
              What to Watch For
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold text-lg">•</span>
                <span className="text-sm">Strangers entering neighbors' homes when residents are away</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold text-lg">•</span>
                <span className="text-sm">Vehicles moving slowly without apparent purpose</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold text-lg">•</span>
                <span className="text-sm">Unusual noises such as breaking glass or screaming</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold text-lg">•</span>
                <span className="text-sm">People loitering around schools, parks, or neighborhoods</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold text-lg">•</span>
                <span className="text-sm">Abandoned vehicles or property</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl shadow-lg p-6 sm:p-8 border border-yellow-200 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <AlertCircle className="w-7 h-7 text-amber-600 mr-3" />
              Important Guidelines
            </h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start space-x-3">
                <span className="text-amber-600 font-bold text-lg">⚠</span>
                <span className="text-sm">Watch groups are NOT vigilantes and should never assume the role of police</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-600 font-bold text-lg">⚠</span>
                <span className="text-sm">Never approach or confront suspicious individuals—observe and report only</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-600 font-bold text-lg">⚠</span>
                <span className="text-sm">Report promptly and accurately to police—be the eyes and ears, not enforcers</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-600 font-bold text-lg">⚠</span>
                <span className="text-sm">Focus on suspicious activities, not appearance—respect all residents' privacy</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-amber-600 font-bold text-lg">⚠</span>
                <span className="text-sm">Improve environment—sponsor cleanups, beautify areas, turn on outdoor lights</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
