
import React from 'react';

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);

const Header: React.FC = () => {
  return (
    <header className="flex-shrink-0 flex items-center justify-between p-6 lg:p-8 border-b border-slate-800">
      <div>
        <h2 className="text-xl font-bold text-white">Welcome back, Hamza</h2>
        <p className="text-slate-400">May your pursuit of knowledge be blessed.</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden lg:block">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search courses or books..."
            className="w-64 bg-slate-800/60 border border-slate-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
          />
        </div>
        <button className="p-2 rounded-full hover:bg-slate-800/60 transition-colors">
          <BellIcon className="h-6 w-6 text-slate-400" />
        </button>
        <button className="md:hidden p-2 rounded-full hover:bg-slate-800/60 transition-colors">
          <SearchIcon className="h-6 w-6 text-slate-400" />
        </button>
      </div>
    </header>
  );
};

export default Header;
