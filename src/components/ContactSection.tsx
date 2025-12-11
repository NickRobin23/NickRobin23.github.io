import { Siren, Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-slate-100 border-t-4 border-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='90' height='90' viewBox='0 0 90 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45 10 L55 35 L80 35 L60 50 L70 75 L45 60 L20 75 L30 50 L10 35 L35 35 Z' stroke='%23475569' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '90px 90px'
        }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-900 px-6 py-3 rounded-full mb-4 border-2 border-yellow-500">
            <Siren className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-bold tracking-wide">24/7 EMERGENCY RESPONSE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 sm:mb-4 px-2">Learn More & Connect</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-2">
            Interested in learning more about community policing initiatives? Connect with the Massachusetts State Police Community Engagement Division for educational resources and partnership opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-slate-300 hover:border-yellow-500 transition-all hover:shadow-2xl">
            <Phone className="w-12 h-12 text-yellow-600 mb-6" />
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">Emergency Contact</h3>
            <p className="text-slate-600 mb-4">For all emergencies requiring immediate police response</p>
            <a href="tel:911" className="block text-yellow-600 hover:text-yellow-700 font-black text-2xl mb-2">911</a>
            <a href="tel:5085609911" className="text-slate-700 hover:text-yellow-600 font-semibold">General HQ: (508) 820-2300</a>
          </div>

          <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-slate-300 hover:border-yellow-500 transition-all hover:shadow-2xl">
            <Mail className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">Email Contact</h3>
            <p className="text-slate-600 mb-4">Questions about community policing programs</p>
            <a href="mailto:community@police.mass.gov" className="text-blue-600 hover:text-blue-700 font-bold break-all">community@police.mass.gov</a>
          </div>

          <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-slate-300 hover:border-yellow-500 transition-all hover:shadow-2xl">
            <MapPin className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">Headquarters</h3>
            <p className="text-slate-600 mb-4">Massachusetts State Police General Headquarters</p>
            <p className="text-slate-700 font-semibold">470 Worcester Road<br />Framingham, MA 01702</p>
          </div>
        </div>
      </div>
    </section>
  );
}
