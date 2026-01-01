
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import type { NavItem } from '../types';

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <aside className="hidden md:flex w-64 flex-col justify-between p-6 bg-slate-900/50 backdrop-blur-lg border-r border-slate-800">
      <div>
        <div className="mb-12">
          <h1 className="text-3xl font-serif text-white">Thalib.</h1>
          <p className="text-sm text-slate-400">Your Sanctuary of Knowledge</p>
        </div>
        <nav>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href="#"
                  onClick={() => setActiveItem(item.name)}
                  className={`flex items-center p-3 my-2 rounded-lg transition-all duration-300 ${
                    activeItem === item.name
                      ? 'bg-gold/10 text-gold'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-4" />
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center p-3 bg-slate-800/50 rounded-lg">
        <img
          src="https://picsum.photos/seed/student/40/40"
          alt="Student profile picture"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="ml-4">
          <p className="font-semibold text-white">Hamza Yusuf</p>
          <p className="text-sm text-slate-400">Dedicated Student</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
