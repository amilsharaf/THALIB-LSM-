
import React from 'react';

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="5 3 19 12 5 21 5 3"/></svg>
);

const BookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
);

const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`bg-slate-800/40 p-6 rounded-2xl border border-slate-700/80 backdrop-blur-sm transition-all duration-300 hover:border-slate-600 hover:shadow-2xl hover:shadow-slate-900/50 ${className}`}>
    {children}
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      
      {/* Continue Learning Card */}
      <Card className="lg:col-span-2 xl:col-span-3 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-serif text-2xl text-white mb-1">Continue your Journey</h3>
          <p className="text-slate-400 mb-6">Fiqh of Salah: The Pillar of Faith</p>
          <div className="w-full bg-slate-700/50 rounded-full h-2.5 mb-2">
            <div className="bg-gold h-2.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
          <p className="text-sm text-slate-400 mb-6">45% Complete</p>
          <button className="flex items-center bg-gold text-midnight font-bold py-2 px-5 rounded-lg hover:bg-gold-dark transition-colors duration-300">
            <PlayIcon className="h-5 w-5 mr-2"/>
            Resume Lesson
          </button>
        </div>
        <img src="https://picsum.photos/seed/mosque/800/400" alt="Islamic architecture" className="absolute top-0 right-0 h-full w-2/3 object-cover opacity-10 z-0"/>
      </Card>
      
      {/* Daily Verse Card */}
      <Card className="flex flex-col justify-center">
        <h3 className="font-serif text-xl text-white mb-3">Verse of the Day</h3>
        <blockquote className="text-slate-300 italic mb-3">
          "And He is with you wherever you are."
        </blockquote>
        <p className="text-slate-400 text-right">- Surah Al-Hadid, 57:4</p>
      </Card>

      {/* Upcoming Session */}
      <Card>
        <h3 className="font-serif text-xl text-white mb-4">Live Session</h3>
        <p className="text-slate-300 font-semibold mb-1">Tafsir of Surah Yusuf</p>
        <p className="text-slate-400 text-sm mb-4">with Dr. Yasir Qadhi</p>
        <div className="bg-slate-700/50 p-3 rounded-lg text-center">
          <p className="text-slate-300 text-sm">Starts in</p>
          <p className="text-2xl font-bold text-white">02:45:10</p>
        </div>
      </Card>

      {/* Quick Access */}
      <Card className="lg:col-span-2">
        <h3 className="font-serif text-xl text-white mb-4">Quick Access</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 cursor-pointer transition">
            <BookIcon className="h-6 w-6 text-gold mr-4"/>
            <div>
              <p className="font-semibold text-white">My Notes</p>
              <p className="text-sm text-slate-400">24 Entries</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/80 cursor-pointer transition">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gold mr-4"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m16 16-1.5-1.5"/><path d="M8 8l1.5 1.5"/></svg>
             <div>
              <p className="font-semibold text-white">Community Forum</p>
              <p className="text-sm text-slate-400">3 New Posts</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Study Streak */}
      <Card className="xl:col-span-2">
        <h3 className="font-serif text-xl text-white mb-4">Study Streak</h3>
        <div className="flex items-center justify-center space-x-6 text-center">
            <div>
              <p className="text-4xl font-bold text-gold">12</p>
              <p className="text-slate-400">Days</p>
            </div>
            <div className="h-16 w-px bg-slate-700"></div>
            <div>
              <p className="text-4xl font-bold text-white">72</p>
              <p className="text-slate-400">Lessons</p>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
