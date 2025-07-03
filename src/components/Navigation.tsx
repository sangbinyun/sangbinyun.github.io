
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, FolderOpen, Download, Home } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`
              }
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </NavLink>
            
            <NavLink 
              to="/publications" 
              className={({ isActive }) => 
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`
              }
            >
              <FileText className="h-4 w-4" />
              <span>Publications</span>
            </NavLink>
            
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`
              }
            >
              <FolderOpen className="h-4 w-4" />
              <span>Projects</span>
            </NavLink>
            
            <NavLink 
              to="/cv" 
              className={({ isActive }) => 
                `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`
              }
            >
              <Download className="h-4 w-4" />
              <span>CV</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
