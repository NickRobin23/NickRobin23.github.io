import { Shield, Award, Radio, Car, Eye } from 'lucide-react';

interface HeroSectionProps {
  lightActive: boolean;
}

export function HeroSection({ lightActive }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pt-16 sm:pt-20">
      {lightActive && (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-police-blue"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-police-red"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-police-red"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-police-blue"></div>
        </>
      )}

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L45 20 L45 40 L30 50 L15 40 L15 20 Z' stroke='%23ffd700' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-0">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border-2 border-yellow-500/50 shadow-lg shadow-yellow-500/20">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            <span className="text-yellow-300 text-xs sm:text-sm font-bold tracking-wide">EST. 1865 • SERVING MASSACHUSETTS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight px-2">
            Community Policing
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
              A Partnership Approach
            </span>
          </h1>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-yellow-500"></div>
            <Award className="w-8 h-8 text-yellow-500" />
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-yellow-500"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Learn about community policing strategies used by the Massachusetts State Police, a teamwork-focused approach that builds partnerships between officers and community members to solve safety issues and improve everyday life.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a href="#programs" className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 border-2 border-yellow-400">
              Explore Programs
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#contact" className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 border-2 border-slate-600 hover:border-yellow-500">
              Get Involved
            </a>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto px-4">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
              <Radio className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-yellow-400 font-bold text-sm">24/7 DISPATCH</div>
              <div className="text-slate-400 text-xs">Always Available</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
              <Car className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-yellow-400 font-bold text-sm">RAPID RESPONSE</div>
              <div className="text-slate-400 text-xs">Quick Action</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
              <Eye className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-yellow-400 font-bold text-sm">VIGILANT PATROL</div>
              <div className="text-slate-400 text-xs">Your Safety First</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-yellow-400/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
