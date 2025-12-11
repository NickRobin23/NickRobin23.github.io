import { TrendingUp, Shield, CheckCircle, Clock } from 'lucide-react';

interface StatisticsSectionProps {
  counters: {
    crimes: number;
    officers: number;
    casesResolved: number;
    responseTime: number;
  };
}

export function StatisticsSection({ counters }: StatisticsSectionProps) {
  return (
    <section id="stats" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden border-y-4 border-yellow-500">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L60 25 L77 25 L65 37 L70 53 L50 43 L30 53 L35 37 L23 25 L40 25 Z' stroke='%23475569' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-block bg-slate-900 text-yellow-400 px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wider mb-4 border-2 border-yellow-500">
            DEPARTMENT STATISTICS
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="text-center group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-pulse opacity-20"></div>
              <div className="relative bg-gradient-to-br from-yellow-500 to-yellow-700 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 sm:border-3 md:border-4 border-yellow-300" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}>
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-slate-900" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-1 sm:mb-2">{counters.crimes}%</div>
            <div className="text-slate-700 font-bold uppercase text-xs sm:text-sm">Crime Reduction</div>
          </div>

          <div className="text-center group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 sm:border-3 md:border-4 border-blue-400" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}>
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-1 sm:mb-2">{counters.officers}</div>
            <div className="text-slate-700 font-bold uppercase text-xs sm:text-sm">Active Officers</div>
          </div>

          <div className="text-center group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-pulse opacity-20"></div>
              <div className="relative bg-gradient-to-br from-green-500 to-green-700 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 sm:border-3 md:border-4 border-green-300" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}>
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-1 sm:mb-2">{counters.casesResolved.toLocaleString()}</div>
            <div className="text-slate-700 font-bold uppercase text-xs sm:text-sm">Cases Resolved (2024)</div>
          </div>

          <div className="text-center group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full animate-pulse opacity-20"></div>
              <div className="relative bg-gradient-to-br from-orange-500 to-orange-700 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 sm:border-3 md:border-4 border-orange-300" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}>
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-1 sm:mb-2">{counters.responseTime}</div>
            <div className="text-slate-700 font-bold uppercase text-xs sm:text-sm">Avg Response Time (min)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
