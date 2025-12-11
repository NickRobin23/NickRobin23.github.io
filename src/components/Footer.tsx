import mspLogo from '../assets/msp.png';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t-4 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <img
              src={mspLogo}
              alt="MSP Logo"
              className="h-12 w-auto"
            />
            <div>
              <span className="font-black text-white block text-lg">Community Policing Research</span>
              <span className="text-yellow-400 font-bold text-xs tracking-wider">ACADEMIC PROJECT</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-slate-400 mb-2">
              Research project exploring community policing strategies and best practices
            </p>
            <p className="text-slate-500 text-sm">
              For educational and research purposes only
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© 2025 Community Policing Research Project • Not affiliated with Massachusetts State Police</p>
        </div>
      </div>
    </footer>
  );
}
