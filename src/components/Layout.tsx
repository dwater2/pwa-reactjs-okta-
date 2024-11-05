import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { User, Menu, LogOut } from 'lucide-react';
import UserModal from './UserModal';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { oktaAuth, authState } = useOktaAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = async () => {
    await oktaAuth.signOut();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Status Bar */}
      <header className="bg-slate-900 text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6" />
            <h1 className="text-lg font-semibold">Minha Aplicação</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-2 hover:bg-slate-800 rounded-full transition"
            >
              <User className="h-6 w-6" />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 hover:bg-slate-800 rounded-full transition"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* User Modal */}
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={authState?.idToken?.claims}
      />
    </div>
  );
}

export default Layout;